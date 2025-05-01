/**
 * Authentication mutation hook for signing in users
 * Uses TanStack Query's useMutation for handling the sign-in GraphQL mutation
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation}
 */

import { gql, request } from 'graphql-request';
import { useMutation } from '@tanstack/react-query';
import { getBackendEndpoint } from '~/common/utils';
import type { SignInResponse } from '~/features/auth/interfaces/SignInResponse';

/**
 * Hook for handling user sign-in mutations
 * @returns {UseMutationResult} Mutation result object containing state and handlers
 * @property {Function} mutate - Function to trigger the sign-in mutation
 * @property {boolean} isPending - Whether the mutation is in progress
 * @property {boolean} isError - Whether the mutation resulted in an error
 * @property {boolean} isSuccess - Whether the mutation was successful
 * @property {SignInResponse} data - Response data from successful mutation
 */
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
