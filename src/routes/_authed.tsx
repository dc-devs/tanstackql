import { createFileRoute, redirect } from '@tanstack/react-router';

// TODO: Fix redirect
export const Route = createFileRoute('/_authed')({
	beforeLoad: ({ context }) => {
		console.log('__authed context', context);

		if (!context.authSession?.isAuthenticated) {
			throw redirect({
				to: '/signin',
			});
		}
	},
});
