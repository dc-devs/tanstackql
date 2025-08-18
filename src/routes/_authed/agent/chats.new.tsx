import { createFileRoute } from '@tanstack/react-router';
import { ChatsNewScreen } from '@/features/agentChat/screens/ChatsNewScreen/Chats-New-Screen';

export const Route = createFileRoute('/_authed/agent/chats/new')({
	component: () => {
		return <ChatsNewScreen />;
	},
});
