import { createFileRoute } from '@tanstack/react-router';
import { ChatScreen } from '@/features/agentChat/components/chat/ChatScreen';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';

export const Route = createFileRoute('/_authed/agent/chats/$chatSessionId')({
	loader: async ({ params }) => {
		const chatSessionId = Number(params.chatSessionId);
		const messages = await findAllMessagesServerFn({
			data: {
				where: {
					chatSessionId: { equals: chatSessionId },
				},
			},
		});

		console.log('messages', messages);

		return { messages };
	},
	component: () => {
		return <ChatScreen />;
	},
});
