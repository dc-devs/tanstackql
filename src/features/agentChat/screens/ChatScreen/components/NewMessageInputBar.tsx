import { useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { useMutation } from '@tanstack/react-query';
import { type CreateChatInput } from '@/gql/graphql';
import { getRouteApi } from '@tanstack/react-router';
// import { type MessageCreateInput } from '@/gql/graphql';
// import { createMessageServerFn } from '@/features/agentChat/serverFns';
import { MessageSubmitBar } from '@/features/agentChat/components/forms';
import { updateChatServerFn } from '@/features/agentChat/serverFns/chats/updateChat';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const NewMessageInputBar = () => {
	const { chatSessionId } = routeApi.useParams();
	const [, setSubmissionError] = useState<string | null>(null);
	const updateChatMutation = useMutation({
		mutationFn: useServerFn(updateChatServerFn),
	});
	// const queryClient = useQueryClient();
	// const [, setSubmissionError] = useState<string | null>(null);
	// const createMessageServerFnCall = useServerFn(createMessageServerFn);

	// type MutationVariables = { data: MessageCreateInput };

	// type Message = {
	// 	id: string;
	// 	content: string;
	// 	sender: string;
	// 	type: string;
	// 	timestamp: string;
	// 	chatSessionId: number;
	// 	isOptimistic?: boolean;
	// };

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
					const message = await updateChatMutation.mutateAsync({
						data: {
							chatSessionId: Number(chatSessionId),
							updateChatInput,
						},
					});

					console.log('message', message);

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
