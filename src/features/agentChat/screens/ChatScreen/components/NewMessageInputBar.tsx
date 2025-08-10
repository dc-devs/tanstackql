import { useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getRouteApi } from '@tanstack/react-router';
import { type MessageCreateInput } from '@/gql/graphql';
import { createMessageServerFn } from '@/features/agentChat/serverFns';
import { MessageSubmitBar } from '@/features/agentChat/components/forms';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const NewMessageInputBar = () => {
	const queryClient = useQueryClient();
	const { chatSessionId } = routeApi.useParams();
	const [, setSubmissionError] = useState<string | null>(null);
	const createMessageServerFnCall = useServerFn(createMessageServerFn);

	type MutationVariables = { data: MessageCreateInput };
	type Message = {
		id: string;
		content: string;
		sender: string;
		type: string;
		timestamp: string;
		chatSessionId: number;
		isOptimistic?: boolean;
	};

	const createMessageMutation = useMutation({
		mutationFn: (variables: MutationVariables) =>
			createMessageServerFnCall(variables),
		mutationKey: ['createMessage', chatSessionId],
		onMutate: async (variables: MutationVariables) => {
			const chatSessionIdNum = Number(chatSessionId);
			await queryClient.cancelQueries({
				queryKey: ['messages', chatSessionId],
			});
			const previousMessages = queryClient.getQueryData([
				'messages',
				chatSessionId,
			]);
			const optimisticMessage: Message = {
				id: `temp-user-${Date.now()}`,
				content: variables.data.content || '',
				sender: 'user',
				type: 'text',
				timestamp: variables.data.timestamp || new Date().toISOString(),
				chatSessionId: chatSessionIdNum,
				isOptimistic: true,
			};
			queryClient.setQueryData(
				['messages', chatSessionId],
				(old: Message[]) => [...(old || []), optimisticMessage],
			);
			return { previousMessages, optimisticMessage };
		},
		onSuccess: (serverResponse, _variables, context) => {
			queryClient.setQueryData(
				['messages', chatSessionId],
				(old: Message[]) => {
					const withoutOptimistic = (old || []).filter(
						(msg) => msg.id !== context?.optimisticMessage.id,
					);
					return [...withoutOptimistic, serverResponse];
				},
			);
			setSubmissionError(null);
		},
		onError: (error, _variables, context) => {
			const chatSessionIdNum = Number(chatSessionId);
			if (context?.previousMessages) {
				queryClient.setQueryData(
					['messages', chatSessionIdNum],
					context.previousMessages,
				);
			}
			console.error('Error creating message:', error);
			setSubmissionError('Failed to send message. Please try again.');
		},
		retry: 1,
		retryDelay: 1000,
	});

	return (
		<MessageSubmitBar
			placeholder="Ask anything"
			pending={createMessageMutation.isPending}
			submitAriaLabel="Send"
			onSubmit={(text, { reset }) => {
				const trimmed = text.trim();

				if (!trimmed) return;

				const messageCreateInput: MessageCreateInput = {
					content: trimmed,
					sender: 'user',
					type: 'text',
					timestamp: new Date().toISOString(),
					chatSession: { connect: { id: Number(chatSessionId) } },
				};

				createMessageMutation.mutate({ data: messageCreateInput });

				reset();
			}}
		/>
	);
};
