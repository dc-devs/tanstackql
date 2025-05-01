import { User } from '~/common/interfaces';

export interface SignInResponse {
	signIn: {
		isAuthenticated: boolean;
		user: User;
	};
}
