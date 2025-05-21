import { createFileRoute } from '@tanstack/react-router';
import { ChatScreen } from '@/features/agentChat/components/chat/ChatScreen';

export const Route = createFileRoute('/_authed/agent/chats/')({
	component: () => {
		return <ChatScreen />;
	},
});
