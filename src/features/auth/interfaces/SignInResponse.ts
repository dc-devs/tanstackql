import { User } from '@/features/user/interfaces/User';

export interface SignInResponse {
	signIn: {
		user: User;
		isAuthenticated: boolean;
	};
}
