import { useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type CreateChatInput, type FindOneMessageQuery } from '@/gql/graphql';
import { getRouteApi } from '@tanstack/react-router';
import { MessageSubmitBar } from '@/features/agentChat/components/forms';
import { updateChatServerFn } from '@/features/agentChat/serverFns/chats/updateChat';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const NewMessageInputBar = () => {
	const { chatSessionId } = routeApi.useParams();
	const [, setSubmissionError] = useState<string | null>(null);
	const queryClient = useQueryClient();

	type ChatMessage = NonNullable<FindOneMessageQuery['findOneMessage']>;

	const updateChatMutation = useMutation({
		mutationFn: useServerFn(updateChatServerFn),
		onMutate: async (variables: {
			data: { chatSessionId: number; updateChatInput: CreateChatInput };
		}) => {
			const key = ['messages', chatSessionId] as const;

			await queryClient.cancelQueries({ queryKey: key });

			const previous = queryClient.getQueryData<ChatMessage[]>(key) ?? [];

			const nowIso = new Date().toISOString();
			const optimisticMessage: ChatMessage = {
				id: `optimistic-${Date.now()}`,
				chatSessionId: Number(chatSessionId),
				type: 'text',
				sender: 'user',
				payload: null,
				content: variables.data.updateChatInput.message,
				timestamp: nowIso,
				createdAt: nowIso,
				updatedAt: nowIso,
			} as unknown as ChatMessage;

			queryClient.setQueryData<ChatMessage[]>(key, [
				...previous,
				optimisticMessage,
			]);

			return { previous, key };
		},
		onError: (_err, _vars, context) => {
			if (context) {
				queryClient.setQueryData(context.key, context.previous);
			}
		},
		onSettled: () => {
			// Ensure we fetch the server state (user + assistant messages)
			queryClient.invalidateQueries({
				queryKey: ['messages', chatSessionId],
			});
		},
	});

	return (
		<MessageSubmitBar
			placeholder="Ask anything"
			pending={updateChatMutation.isPending}
			submitAriaLabel="Send"
			onSubmit={async (text, { reset, setError }) => {
				setSubmissionError(null);
				const message = text.trim();

				if (!message) return;

				const updateChatInput: CreateChatInput = {
					message,
				};

				try {
					await updateChatMutation.mutateAsync({
						data: {
							chatSessionId: Number(chatSessionId),
							updateChatInput,
						},
					});

					reset();
				} catch (error) {
					console.error('Error creating chat session:', error);
					setSubmissionError('Failed to create new chat session.');
					setError('Failed to create new chat session.');
				}
			}}
		/>
	);
};
