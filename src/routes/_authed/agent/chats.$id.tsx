import { createFileRoute } from '@tanstack/react-router';
import { Chat } from '@/features/agentChat/components/Chat';
import { getMessages } from '@/features/agentChat/serverFns/getMessages';

export const Route = createFileRoute('/_authed/agent/chats/$id')({
	loader: async ({ params, context }) => {
		const chatSessionId = Number(params.id);

		// Prefetch and cache the data for SSR
		const data = await context.queryClient.prefetchQuery({
			queryKey: ['messages', `chatSessionId-${chatSessionId}`],
			queryFn: () =>
				getMessages({
					data: {
						where: {
							chatSessionId: {
								equals: chatSessionId,
							},
						},
					},
				}),
		});
		// You can return nothing, or return the data if you want
		return data;
	},
	component: () => {
		return <Chat />;
	},
});
