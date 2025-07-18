import { QueryClient } from '@tanstack/react-query';
import { Outlet, useMatches } from '@tanstack/react-router';
import type { AuthState } from '@/features/auth/interfaces';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '@/features/auth/providers/AuthProvider';
import { RootDocument } from '@/features/root/components/RootDocument';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

type RootContext = {
	currentUser: Omit<AuthState, 'isLoading'>;
	queryClient: QueryClient;
	dehydratedState: unknown;
};

export const RootComponent = () => {
	const matches = useMatches();
	const rootMatch = matches.find((match) => match.routeId === '/');
	const { currentUser } = (rootMatch?.context ?? {}) as Partial<RootContext>;

	return (
		<>
			<AuthProvider initialData={currentUser}>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</AuthProvider>
			{/* <ReactQueryDevtools initialIsOpen={false} />
			<TanStackRouterDevtools position="bottom-left" /> */}
		</>
	);
};
