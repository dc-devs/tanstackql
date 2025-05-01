import { AuthState } from '~/common/interfaces/AuthState';

/**
 * Extends AuthState with authentication-related functions
 * @interface AuthContextType
 * @extends {AuthState}
 * @property {() => Promise<void>} fetchCurrentUser - Function to fetch the current user's data
 */
export interface AuthContextType extends AuthState {
	fetchCurrentUser: () => Promise<void>;
}
