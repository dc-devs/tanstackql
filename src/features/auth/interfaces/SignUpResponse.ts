import { User } from '~/features/user/interfaces/User';

export interface SignUpResponse {
	signUp: {
		user: User;
		isAuthenticated: boolean;
	};
}
