import { SignInPage } from '@/features/auth/components';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/signin')({
	component: SignInPage,
	beforeLoad: ({ context }) => {
		if (context.authSession?.isAuthenticated) {
			throw redirect({
				to: '/',
			});
		}
	},
});
