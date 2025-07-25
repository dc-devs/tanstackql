import { routeTree } from '@/routeTree.gen';
import { NotFound } from '@/components/NotFound';
import { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';

export function createRouter() {
	const queryClient = new QueryClient();

	return routerWithQueryClient(
		createTanStackRouter({
			routeTree,
			context: { queryClient },
			defaultPreload: false,
			defaultErrorComponent: DefaultCatchBoundary,
			defaultNotFoundComponent: () => <NotFound />,
			scrollRestoration: true,
		}),
		queryClient,
	);
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
