import { createFileRoute } from '@tanstack/react-router';
import { ChatsNew } from '@/features/agentChat/screens/ChatsNew';

export const Route = createFileRoute('/_authed/agent/chats/new')({
	component: () => {
		return <ChatsNew />;
	},
});
