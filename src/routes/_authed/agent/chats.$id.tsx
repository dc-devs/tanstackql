import { createFileRoute } from '@tanstack/react-router';
import { Chat } from '@/features/agentChat/components/Chat';
import { getMessages } from '@/features/agentChat/server/getMessages';

export const Route = createFileRoute('/_authed/agent/chats/$id')({
	loader: async ({ context }) => {
		console.log('[DEBUG] /agent/chats/$id - loader', context);
		// Prefetch and cache the data for SSR
		const data = await context.queryClient.prefetchQuery({
			queryKey: ['messages'],
			queryFn: getMessages,
		});
		// You can return nothing, or return the data if you want
		return data;
	},
	component: () => {
		return <Chat />;
	},
});
