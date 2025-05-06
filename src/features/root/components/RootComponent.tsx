import { Outlet, useMatches } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '~/features/auth/providers/AuthProvider';
import { RootDocument } from '~/features/root/components/RootDocument';
import type { AuthState } from '~/features/auth/interfaces';

type RootContext = {
	currentUser: Omit<AuthState, 'isLoading'>;
	queryClient: QueryClient;
	dehydratedState: unknown;
};

export const RootComponent = () => {
	console.log('[Client] RootComponent rendering');

	const matches = useMatches();
	const rootMatch = matches.find((match) => match.routeId === '/');
	const { currentUser } = (rootMatch?.context ?? {}) as Partial<RootContext>;

	console.log('[Client] Context values:', {
		hasCurrentUser: !!currentUser,
	});

	return (
		<>
			<AuthProvider initialData={currentUser}>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
