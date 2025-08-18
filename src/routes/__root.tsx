/// <reference types="vite/client" />
import { NotFound } from '@/components/NotFound';
import type { QueryClient } from '@tanstack/react-query';
import { getHead } from '@/features/root/utils/getHead';
import { getAuthSessionServerFn } from '@/features/auth/serverFns';
import { createRootRouteWithContext } from '@tanstack/react-router';
import { RootComponent, RootDocument } from '@/features/root/components';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import { isDevelopment, isProduction } from '@/common/constants/environment';
import { getBackendEndpoint } from '@/common/utils';

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: getHead,
	beforeLoad: async () => {
		if (isDevelopment) {
			// TODO: Fix with proper SSL
			process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		}

		console.log('isDevelopment', isDevelopment);
		console.log('isProduction', isProduction);
		console.log('getBackendEndpoint', getBackendEndpoint());

		const authSession = await getAuthSessionServerFn();

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
