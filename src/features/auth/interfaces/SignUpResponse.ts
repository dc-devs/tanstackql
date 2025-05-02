import { User } from '~/common/interfaces';

export interface SignUpResponse {
	signUp: {
		user: User;
		isAuthenticated: boolean;
	};
}
