import { createFileRoute, Outlet } from '@tanstack/react-router';
import { findAllChatSessionsServerFn } from '@/features/agentChat/serverFns';
import { AgentChatLayout } from '@/features/agentChat/components/AgentChatLayout';

export const Route = createFileRoute('/_authed/agent')({
	// TODO: FIX Chat Sessions loading on each link hover
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
