import { gql, request } from 'graphql-request';
import { useMutation } from '@tanstack/react-query';
import { getBackendEndpoint } from '~/common/utils';
import type { SignInResponse } from '~/features/auth/interfaces/SignInResponse';

export const useSignIn = () => {
	const endpoint = getBackendEndpoint();

	return useMutation({
		mutationFn: async (credentials: {
			email: string;
			password: string;
		}) => {
			const response = await request<SignInResponse>(
				endpoint,
				gql`
					mutation SignIn($sessionInput: SessionInput!) {
						signIn(sessionInput: $sessionInput) {
							isAuthenticated
							user {
								id
								role
								email
								createdAt
								updatedAt
							}
						}
					}
				`,
				{
					sessionInput: {
						email: credentials.email,
						password: credentials.password,
					},
				},
			);
			console.log('Login response:', response);
			return response.signIn;
		},
	});
};
