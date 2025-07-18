/// <reference types="vite/client" />
import { createRootRouteWithContext } from '@tanstack/react-router';
import { RootComponent, RootDocument } from '@/features/root/components';
import { currentUserQuery } from '@/features/auth/queries/authQueries';
import { dehydrate } from '@tanstack/react-query';
import type { QueryClient } from '@tanstack/react-query';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import { NotFound } from '@/components/NotFound';
import { getHead } from '@/features/root/utils/getHead';

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: getHead,
	beforeLoad: async ({
		context,
	}: {
		context: { queryClient: QueryClient };
	}) => {
		// Configure the query client for SSR
		context.queryClient.setDefaultOptions({
			queries: {
				retry: false,
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
			},
		});

		// Prefetch current user (server-side cookies will be handled automatically)
		try {
			await context.queryClient.prefetchQuery(currentUserQuery);
		} catch (error) {
			console.error('[DEBUG] Error prefetching current user', error);
		}

		// Get the current user data
		const currentUser = context.queryClient.getQueryData(
			currentUserQuery.queryKey,
		);

		// Dehydrate the query client state
		const dehydratedState = dehydrate(context.queryClient);

		return {
			currentUser,
			dehydratedState,
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
