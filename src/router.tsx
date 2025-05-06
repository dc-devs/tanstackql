import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen';
import { DefaultCatchBoundary } from './features/root/components/DefaultCatchBoundary';
import { NotFound } from './features/root/components/NotFound';

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
	});

	return router;
};

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}

// Add type for the router context
declare module '@tanstack/react-router' {
	interface RouterContext {
		queryClient: QueryClient;
	}
}
