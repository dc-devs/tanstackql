import { createFileRoute } from '@tanstack/react-router';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';
import { ChatScreen } from '@/features/agentChat/screens/ChatScreen';
import { chatAssistantGenerationStatusByMessageServerFunction } from '@/features/agentChat/serverFns';

export const Route = createFileRoute('/_authed/agent/chats/$chatSessionId')({
	loader: async ({ params, context: { queryClient } }) => {
		const chatSessionId = Number(params.chatSessionId); // Convert for API call

		// Fetch with serverFn (fast SSR)
		const messages = await findAllMessagesServerFn({
			data: {
				where: {
					chatSessionId: { equals: chatSessionId },
				},
			},
		});
		const lastMessage = messages[messages.length - 1];
		const lastMessageIsUserMessage = lastMessage?.sender === 'user';

		if (lastMessageIsUserMessage) {
			const lastUserMessageId = Number(lastMessage!.id);

			void chatAssistantGenerationStatusByMessageServerFunction({
				data: { chatSessionId, lastUserMessageId },
			});
		}

		// Seed TanStack Query cache for instant component access
		queryClient.setQueryData(['messages', params.chatSessionId], messages); // ✅ STANDARD: Use string for cache key

		// Return data for any components that need useLoaderData()
		return {
			messages,
			chatSessionId: params.chatSessionId,
			lastMessageIsUserMessage,
		}; // Return string ID
	},
	component: () => {
		return <ChatScreen />;
	},
});
