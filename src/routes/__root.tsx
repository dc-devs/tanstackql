import { getHead } from '~/features/root/utils';
import { createRootRoute } from '@tanstack/react-router';
import { NotFound } from '~/features/root/components/NotFound';
import { RootDocument, RootComponent } from '~/features/root/components';
import { DefaultCatchBoundary } from '~/features/root/components/DefaultCatchBoundary';
import { currentUserQuery } from '~/features/auth/queries/authQueries';
import type { QueryClient } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/react-query';
import { getWebRequest } from '@tanstack/react-start/server';

export const Route = createRootRoute({
	head: getHead,
	component: RootComponent,
	notFoundComponent: () => <NotFound />,
	beforeLoad: async ({
		context,
	}: {
		context: { queryClient: QueryClient };
	}) => {
		console.log('[SSR] beforeLoad starting');

		try {
			// Get the request headers for SSR
			const request = getWebRequest();
			const cookie = request?.headers.get('cookie') || '';
			console.log('[SSR] Cookie header:', cookie);

			// Configure the query client for SSR
			context.queryClient.setDefaultOptions({
				queries: {
					retry: false,
					refetchOnMount: false,
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
				},
			});

			// Prefetch with server context
			await context.queryClient.prefetchQuery({
				...currentUserQuery,
				meta: {
					headers: {
						cookie,
					},
				},
			});

			// Get the current user data
			const currentUser = context.queryClient.getQueryData(
				currentUserQuery.queryKey,
			);
			console.log('[SSR] currentUser from prefetch:', currentUser);

			// Dehydrate the query client state
			const dehydratedState = dehydrate(context.queryClient);
			console.log('[SSR] dehydratedState:', dehydratedState);

			if (!currentUser) {
				console.log('[SSR] No current user data found after prefetch');
			}

			return {
				currentUser,
				dehydratedState,
			};
		} catch (error) {
			console.error('[SSR] Error in beforeLoad:', error);
			// Return empty state but don't throw to allow client-side retry
			return {
				currentUser: undefined,
				dehydratedState: dehydrate(context.queryClient),
			};
		}
	},
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
});
