import { createFileRoute } from '@tanstack/react-router';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';
import { ChatScreen } from '@/features/agentChat/screens/ChatScreen/ChatScreen';

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

		console.log(
			'[agent/chats/$chatSessionId]',
			params.chatSessionId,
			messages,
		);

		return { messages };
	},
	component: () => {
		return <ChatScreen />;
	},
});
