import { SignUpPage } from '@/features/auth/components/signUp';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
	component: SignUpPage,
	beforeLoad: ({ context }) => {
		if (context.authSession?.isAuthenticated) {
			throw redirect({
				to: '/',
			});
		}
	},
});
