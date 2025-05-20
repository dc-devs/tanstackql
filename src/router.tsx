import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen';
import { DefaultCatchBoundary } from './features/root/components/DefaultCatchBoundary';
import { NotFound } from './features/root/components/NotFound';
import { QueryClientProvider } from '@tanstack/react-query';
import { dehydrate, hydrate } from '@tanstack/react-query';

// Add type for the router context
declare module '@tanstack/react-router' {
	interface RouterContext {
		queryClient: QueryClient;
	}
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}

export const createRouter = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// Don't refetch on window focus for SSR apps
				refetchOnWindowFocus: false,
				// Prevent automatic refetching for SSR
				staleTime: Infinity,
				// Don't refetch on mount if we have data
				refetchOnMount: false,
			},
		},
	});

	const router = createTanStackRouter({
		routeTree,
		defaultPreload: 'intent',
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
		scrollRestoration: true,
		context: {
			queryClient,
		},
		// On the server, dehydrate the loader client so the router
		// can serialize it and send it to the client for us
		dehydrate: () => {
			return {
				queryClientState: dehydrate(queryClient),
			};
		},
		// On the client, hydrate the loader client with the data
		// we dehydrated on the server
		hydrate: (dehydrated) => {
			if (dehydrated?.queryClientState) {
				hydrate(queryClient, dehydrated.queryClientState);
			}
		},
		// Wrap the router in the QueryClientProvider
		Wrap: ({ children }) => {
			return (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			);
		},
	});

	return router;
};
