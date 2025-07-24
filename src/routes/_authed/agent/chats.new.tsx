import { createFileRoute } from '@tanstack/react-router';
import { ChatsNewScreen } from '@/features/agentChat/screens/chatsNewScreen/ChatsNewScreen';

export const Route = createFileRoute('/_authed/agent/chats/new')({
	component: () => {
		return <ChatsNewScreen />;
	},
});
