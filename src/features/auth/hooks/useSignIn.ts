import { request } from 'graphql-request';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getBackendEndpoint } from '@/common/utils';
import { SignInMutation } from '@/features/auth/queries';
import { currentUserQuery } from '@/features/auth/queries/authQueries';
import type { SignInResponse } from '@/features/auth/interfaces';

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
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (credentials: {
			email: string;
			password: string;
		}) => {
			const response = await request<SignInResponse>(
				endpoint,
				SignInMutation,
				{
					sessionInput: {
						email: credentials.email,
						password: credentials.password,
					},
				},
			);

			return response.signIn;
		},
		onSuccess: (data) => {
			// Update the currentUser query cache with the sign in response
			queryClient.setQueryData(currentUserQuery.queryKey, data);
		},
	});
};
