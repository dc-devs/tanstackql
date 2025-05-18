import { createFileRoute } from '@tanstack/react-router';
import { NewChat } from '@/features/agentChat/components/NewChat';

export const Route = createFileRoute('/_authed/agent/chats/')({
	component: () => {
		return <NewChat />;
	},
});
