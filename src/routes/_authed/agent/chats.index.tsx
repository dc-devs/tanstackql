import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/agent/chats/')({
	beforeLoad: async () => {
		console.log('[/_authed/agent/chats]: beforeLoad');
		throw redirect({ to: '/agent/chats/new' });
	},
});
