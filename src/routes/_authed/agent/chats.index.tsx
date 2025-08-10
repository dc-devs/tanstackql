import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/agent/chats/')({
	beforeLoad: async () => {
		throw redirect({ to: '/agent/chats/new' });
	},
});
