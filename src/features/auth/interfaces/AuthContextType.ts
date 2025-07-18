import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { AuthState } from '@/features/auth/interfaces/AuthState';

/**
 * Extends AuthState with authentication-related functions
 * @interface AuthContextType
 * @extends {AuthState}
 * @property {Function} fetchCurrentUser - Function to refetch the current user's data
 */
export interface AuthContextType extends AuthState {
	fetchCurrentUser: (
		options?: RefetchOptions,
	) => Promise<QueryObserverResult<Omit<AuthState, 'isLoading'>, Error>>;
}
