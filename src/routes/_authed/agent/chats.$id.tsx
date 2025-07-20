import { createFileRoute } from '@tanstack/react-router';
import { ChatScreen } from '@/features/agentChat/components/chat/ChatScreen';
// import { findAllMessages } from '@/serverFns/messages/fns/findAllMessages';

// TODO: FIX Chat Messages
export const Route = createFileRoute('/_authed/agent/chats/$id')({
	loader: async ({ params, context }) => {
		// 	const chatSessionId = Number(params.id);
		// 	// Prefetch and cache the data for SSR
		// 	const data = await context.queryClient.prefetchQuery({
		// 		queryKey: ['messages', `chatSessionId-${chatSessionId}`],
		// 		queryFn: () =>
		// 			findAllMessages({
		// 				data: {
		// 					where: {
		// 						chatSessionId: {
		// 							equals: chatSessionId,
		// 						},
		// 					},
		// 				},
		// 			}),
		// 	})
		// 	// You can return nothing, or return the data if you want
		// 	return data;
	},
	component: () => {
		return <ChatScreen />;
	},
});
