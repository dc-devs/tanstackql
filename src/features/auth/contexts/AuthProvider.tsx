import { gql, request } from 'graphql-request';
import { getBackendEndpoint } from '~/common/utils';
import type { AuthState, AuthContextType } from '~/common/interfaces';
import {
	JSX,
	useState,
	useEffect,
	useContext,
	createContext,
	type ReactNode,
} from 'react';

/**
 * Custom hook to access authentication context
 * @function useAuth
 * @throws {Error} If used outside of AuthProvider
 * @returns {AuthContextType} Authentication context including state and functions
 */
export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

/** React context for authentication state and functions */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * GraphQL query to fetch the current user's data
 * @constant {DocumentNode} CurrentUserQuery
 */
const CurrentUserQuery = gql`
	query CurrentUser {
		currentUser {
			isAuthenticated
			user {
				id
				role
				email
				createdAt
				updatedAt
			}
		}
	}
`;

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
	const [state, setState] = useState<AuthState>({
		isAuthenticated: false,
		user: null,
		isLoading: true,
	});

	const endpoint = getBackendEndpoint();

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
			console.log('Current user response:', response);

			// @ts-expect-error not typed
			const { currentUser } = response;

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
