import { createFileRoute, Outlet } from '@tanstack/react-router';
import { getChatSessions } from '@/features/agentChat/server/getChatSessions';
import { AgentChatLayout } from '@/features/agentChat/components/AgentChatLayout';

export const Route = createFileRoute('/_authed/agent')({
	loader: async ({ context }) => {
		// Prefetch and cache the data for SSR
		const data = await context.queryClient.prefetchQuery({
			queryKey: ['chat-sessions'],
			queryFn: getChatSessions,
		});
		// You can return nothing, or return the data if you want
		return data;
	},
	component: () => {
		return (
			<AgentChatLayout>
				<Outlet />
			</AgentChatLayout>
		);
	},
});
