import { createFileRoute } from '@tanstack/react-router';
import { AgentChat } from '@/features/agentChat/components/AgentChat';
import { getChatSessions } from '@/features/agentChat/server/getChatSessions';

export const Route = createFileRoute('/_authed/agent-chat')({
	loader: async ({ context }) => {
		// Prefetch and cache the data for SSR
		const data = await context.queryClient.prefetchQuery({
			queryKey: ['chat-sessions'],
			queryFn: getChatSessions,
		});
		// You can return nothing, or return the data if you want
		return data;
	},
	component: AgentChat,
});
