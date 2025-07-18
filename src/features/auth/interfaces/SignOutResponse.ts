export interface SignOutResponse {
	signOut: {
		userId: number;
		isAuthenticated: boolean;
	};
}
