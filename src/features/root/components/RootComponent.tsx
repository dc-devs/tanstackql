import { Outlet, useMatches } from '@tanstack/react-router';
import {
	QueryClientProvider,
	QueryClient,
	hydrate,
} from '@tanstack/react-query';
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
	const { currentUser, queryClient, dehydratedState } = (rootMatch?.context ??
		{}) as Partial<RootContext>;

	console.log('[Client] Context values:', {
		hasCurrentUser: !!currentUser,
		hasQueryClient: !!queryClient,
		hasDehydratedState: !!dehydratedState,
	});

	if (!queryClient) {
		throw new Error('QueryClient not found in root route context');
	}

	// Hydrate the query client with the dehydrated state
	if (dehydratedState) {
		console.log('[Client] Hydrating query client');
		hydrate(queryClient, dehydratedState);
	} else {
		console.log('[Client] No dehydrated state to hydrate');
	}

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider initialData={currentUser}>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</AuthProvider>
		</QueryClientProvider>
	);
};
