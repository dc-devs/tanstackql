import { User } from '~/common/interfaces/User';

/**
 * Represents the current authentication state
 * @interface AuthState
 * @property {boolean} isAuthenticated - Whether the user is currently authenticated
 * @property {User | null} user - The current user object or null if not authenticated
 * @property {boolean} isLoading - Whether the authentication state is being loaded
 */
export interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	isLoading: boolean;
}
