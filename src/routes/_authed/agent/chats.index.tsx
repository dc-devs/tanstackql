import { createFileRoute } from '@tanstack/react-router';
import { ChatScreen } from '@/features/agentChat/components/chat/ChatScreen';

export const Route = createFileRoute('/_authed/agent/chats/')({
	component: () => {
		console.log('');
		console.log('[DEBUG] Chats index');
		console.log('');
		return <ChatScreen />;
	},
});
