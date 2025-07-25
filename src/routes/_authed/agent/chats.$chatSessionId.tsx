import { createFileRoute } from '@tanstack/react-router';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';
import { ChatScreen } from '@/features/agentChat/screens/ChatScreen/ChatScreen';

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

		// Seed TanStack Query cache for instant component access
		queryClient.setQueryData(['messages', params.chatSessionId], messages); // ✅ STANDARD: Use string for cache key

		// Return data for any components that need useLoaderData()
		return { messages, chatSessionId: params.chatSessionId }; // Return string ID
	},
	component: () => {
		return <ChatScreen />;
	},
});
