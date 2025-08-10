import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { useNavigate } from '@tanstack/react-router';
import { type CreateChatInput } from '@/gql/graphql';
import { createChatServerFn } from '@/features/agentChat/serverFns/chats/createChat';
import { MessageSubmitBar } from '@/features/agentChat/components/forms';

export const NewChatSessionInputBar = () => {
	const navigate = useNavigate();
	const [, setSubmissionError] = useState<string | null>(null);
	const createChatSessionMutation = useMutation({
		mutationFn: useServerFn(createChatServerFn),
	});

	return (
		<MessageSubmitBar
			placeholder="Ask anything"
			pending={createChatSessionMutation.isPending}
			submitAriaLabel="Send"
			onSubmit={async (text, { reset, setError }) => {
				setSubmissionError(null);
				const message = text.trim();
				if (!message) return;

				const createChatInput: CreateChatInput = { message };
				try {
					const chatSession =
						await createChatSessionMutation.mutateAsync({
							data: createChatInput,
						});
					const chatSessionId = chatSession?.id;

					if (chatSessionId) {
						navigate({
							to: '/agent/chats/$chatSessionId',
							params: { chatSessionId },
						});
					}

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
