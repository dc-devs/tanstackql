import { request } from 'graphql-request';
import { useMutation } from '@tanstack/react-query';
import { getBackendEndpoint } from '~/common/utils';
import { SignOutMutation } from '~/features/auth/queries';
import type { SignOutResponse } from '~/features/auth/interfaces';

/**
 * Hook for handling user sign-out mutations
 * @returns {UseMutationResult} Mutation result object containing state and handlers
 */
export const useSignOut = () => {
	const endpoint = getBackendEndpoint();

	return useMutation({
		mutationFn: async ({ userId }: { userId: string }) => {
			const response = await request<SignOutResponse>(
				endpoint,
				SignOutMutation,
				{
					userId,
				},
			);

			return response.signOut;
		},
	});
};
