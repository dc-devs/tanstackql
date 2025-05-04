import { request } from 'graphql-request';
import { useMutation } from '@tanstack/react-query';
import { getBackendEndpoint } from '~/common/utils';
import { SignUpMutation } from '~/features/auth/queries';
import type { SignUpResponse } from '~/features/auth/interfaces';

/**
 * Hook for handling user sign-up mutations
 * @returns {UseMutationResult} Mutation result object containing state and handlers
 * @property {Function} mutate - Function to trigger the sign-up mutation
 * @property {boolean} isPending - Whether the mutation is in progress
 * @property {boolean} isError - Whether the mutation resulted in an error
 * @property {boolean} isSuccess - Whether the mutation was successful
 * @property {SignUpResponse} data - Response data from successful mutation
 */
export const useSignUp = () => {
	const endpoint = getBackendEndpoint();

	return useMutation({
		mutationFn: async (credentials: {
			email: string;
			password: string;
		}) => {
			const response = await request<SignUpResponse>(
				endpoint,
				SignUpMutation,
				{
					data: {
						email: credentials.email,
						password: credentials.password,
					},
				},
			);

			return response.signUp;
		},
	});
};
