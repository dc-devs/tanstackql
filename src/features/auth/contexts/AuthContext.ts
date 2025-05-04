import { createContext } from 'react';
import type { AuthContextType } from '~/features/auth/interfaces';

/** React context for authentication state and functions */
export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);
