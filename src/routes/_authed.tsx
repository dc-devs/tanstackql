import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed')({
	beforeLoad: ({ context }) => {
		if (!context.authSession?.isAuthenticated) {
			throw redirect({
				to: '/signin',
			});
		}
	},
});
