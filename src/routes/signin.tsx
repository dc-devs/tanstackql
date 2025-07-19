// import { useRouter } from '@tanstack/react-router';
import { SignInPage } from '@/features/auth/components';
import { createFileRoute /*, redirect */ } from '@tanstack/react-router';

export const Route = createFileRoute('/signin')({
	component: SignInPage,
	beforeLoad: ({ context, location }) => {
		// const router = useRouter();
		// console.log('signin router', router);
		console.log('signin context', context);
		console.log('signin location', location);

		// if (context.authSession?.isAuthenticated) {
		// 	throw redirect({
		// 		to: '/',
		// 	});
		// }
	},
});
