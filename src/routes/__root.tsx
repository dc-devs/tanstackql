import { getHead } from '~/features/root/utils';
import { dehydrate } from '@tanstack/react-query';
import { createRootRoute } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { getWebRequest } from '@tanstack/react-start/server';
import { NotFound } from '~/features/root/components/NotFound';
import { currentUserQuery } from '~/features/auth/queries/authQueries';
import { RootDocument, RootComponent } from '~/features/root/components';
import { DefaultCatchBoundary } from '~/features/root/components/DefaultCatchBoundary';

export const Route = createRootRoute({
	head: getHead,
	component: RootComponent,
	notFoundComponent: () => <NotFound />,
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

		// Initialize headers for the request
		const headers: Record<string, string> = {};

		// Only try to get cookie during SSR
		if (typeof window === 'undefined') {
			try {
				const request = getWebRequest();
				const cookie = request?.headers.get('cookie');
				if (cookie) {
					headers.cookie = cookie;
				}
			} catch {}
		}

		// Prefetch with server context
		try {
			await context.queryClient.prefetchQuery({
				...currentUserQuery,
				meta: {
					headers,
				},
			});
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
});
