import { type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '~/features/auth/contexts';
import type { AuthState } from '~/features/auth/interfaces';
import { currentUserQuery } from '../queries/authQueries';

/**
 * Provider component that wraps the application and provides authentication context
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to be wrapped
 * @param {AuthState} [props.initialData] - Initial authentication state from server
 * @returns {JSX.Element} Provider component with authentication context
 */
export const AuthProvider = ({
	children,
	initialData,
}: {
	children: ReactNode;
	initialData?: Omit<AuthState, 'isLoading'>;
}) => {
	console.log('[Auth] AuthProvider rendering with initialData:', initialData);

	const {
		data: currentUser,
		refetch: fetchCurrentUser,
		isLoading,
		isInitialLoading,
	} = useQuery({
		...currentUserQuery,
		initialData: initialData ?? undefined,
		// Don't refetch on mount if we have initial data
		refetchOnMount: !initialData,
		// Prevent unnecessary refetches
		staleTime: Infinity,
		// Disable retries to prevent unnecessary requests
		retry: false,
		// Disable background refetches
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		// Use initialData as placeholder during loading
		placeholderData: initialData,
	});

	console.log('[Auth] Query result:', {
		currentUser,
		isLoading,
		isInitialLoading,
		hasInitialData: !!initialData,
	});

	// Use initialData during the first render if available
	const authState = {
		isLoading: isInitialLoading && !initialData,
		fetchCurrentUser,
		user: currentUser?.user ?? null,
		isAuthenticated: currentUser?.isAuthenticated ?? false,
	};

	return (
		<AuthContext.Provider value={authState}>
			{children}
		</AuthContext.Provider>
	);
};
