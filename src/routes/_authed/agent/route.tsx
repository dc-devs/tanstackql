import { createFileRoute, Outlet } from '@tanstack/react-router';
import { AgentChatLayout } from '@/features/agentChat/components/AgentChatLayout';
import { findAllChatSessionsServerFn } from '@/features/agentChat/serverFns';

export const Route = createFileRoute('/_authed/agent')({
	loader: async ({ context }) => {
		const { authSession } = context;
		const userId = Number(authSession!.user!.id);

		const chatSessions = await findAllChatSessionsServerFn({
			data: {
				where: {
					userId: { equals: userId },
				},
			},
		});
		console.log('[/_authed/agent]: chatSessions', chatSessions);

		return { chatSessions };
	},
	component: () => {
		return (
			<AgentChatLayout>
				<Outlet />
			</AgentChatLayout>
		);
	},
});
