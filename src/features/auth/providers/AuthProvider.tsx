import { request } from 'graphql-request';
import { getBackendEndpoint } from '~/common/utils';
import { AuthContext } from '~/features/auth/contexts';
import { CurrentUserQuery } from '~/features/auth/queries';
import type { AuthState } from '~/features/auth/interfaces';
import { JSX, useState, useEffect, type ReactNode } from 'react';

/**
 * Provider component that wraps the application and provides authentication context
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} Provider component with authentication context
 */
export const AuthProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const endpoint = getBackendEndpoint();
	const [state, setState] = useState<AuthState>({
		user: null,
		isLoading: true,
		isAuthenticated: false,
	});

	/**
	 * Fetches the current user's data from the GraphQL endpoint
	 * Updates the authentication state based on the response
	 * @async
	 * @function fetchCurrentUser
	 * @returns {Promise<void>}
	 */
	const fetchCurrentUser = async () => {
		try {
			const response = await request(endpoint, CurrentUserQuery);
			const { currentUser } = response as { currentUser: AuthState };

			setState({
				isAuthenticated: currentUser.isAuthenticated,
				user: currentUser.user,
				isLoading: false,
			});
		} catch (error) {
			console.log('Error fetching current user:', error);
			setState({
				isAuthenticated: false,
				user: null,
				isLoading: false,
			});
		}
	};

	// Fetch user data when component mounts
	useEffect(() => {
		fetchCurrentUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				...state,
				fetchCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
