/// <reference types="vite/client" />
import { NotFound } from '@/components/NotFound';
import type { QueryClient } from '@tanstack/react-query';
import { getHead } from '@/features/root/utils/getHead';
import { getAuthSessionServer } from '@/features/auth/serverFns';
import { createRootRouteWithContext } from '@tanstack/react-router';
import { RootComponent, RootDocument } from '@/features/root/components';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: getHead,
	beforeLoad: async ({
		context,
	}: {
		context: { queryClient: QueryClient };
	}) => {
		// TODO: Fix with proper SSL
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		// queryClient available, not using..
		console.log('__root context', context);

		const authSession = await getAuthSessionServer();
		console.log('__root authSession', authSession);

		return {
			authSession,
		};
	},
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
});
