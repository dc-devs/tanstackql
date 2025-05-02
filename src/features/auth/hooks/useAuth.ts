import { useContext } from 'react';
import { AuthContext } from '~/features/auth/contexts';

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
