import { createFileRoute } from '@tanstack/react-router';
import { ChatsNewScreen } from '@/features/agentChat/screens/Chats-New-Screen';

export const Route = createFileRoute('/_authed/agent/chats/new')({
	component: () => {
		return <ChatsNewScreen />;
	},
});
