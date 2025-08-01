import { createFileRoute } from '@tanstack/react-router';
import { ChatsNewScreen } from '@/features/agentChat/screens/ChatsNewScreen/ChatsNewScreen';

export const Route = createFileRoute('/_authed/agent/chats/new')({
	component: () => {
		console.log('[/_authed/agent/chats/new]: component');
		return <ChatsNewScreen />;
	},
});
