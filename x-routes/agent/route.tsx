import { createFileRoute, Outlet } from '@tanstack/react-router';
import { findAllChatSessions } from '@/serverFns/chatSessions/fns/findAllChatSessions';
import { AgentChatLayout } from '@/features/agentChat/components/AgentChatLayout';

export const Route = createFileRoute('/_authed/agent')({
	loader: async ({ context }) => {
		const userId = Number(context?.currentUser?.user?.id);

		// Prefetch and cache the data for SSR
		const data = await context.queryClient.prefetchQuery({
			queryKey: ['chat-sessions', `userId-${userId}`],
			queryFn: () =>
				findAllChatSessions({
					data: {
						where: {
							userId: {
								equals: userId,
							},
						},
					},
				}),
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
