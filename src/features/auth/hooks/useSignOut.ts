import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGraphQLRequest } from '@/common/utils';
import { SignOutMutation } from '@/features/auth/queries';
import type { SignOutResponse } from '@/features/auth/interfaces';
// import { currentUserQuery } from '../queries/authQueries';

/**
 * Hook for handling user sign-out mutations
 * @returns {UseMutationResult} Mutation result object containing state and handlers
 */
// TODO: FIX AUTH
export const useSignOut = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ userId }: { userId: string }) => {
			const response = await createGraphQLRequest<SignOutResponse>(
				SignOutMutation,
				{
					userId,
				},
			);

			return response.signOut;
		},
		onSuccess: () => {
			// // Reset the current user query data
			// queryClient.setQueryData(currentUserQuery.queryKey, {
			// 	user: null,
			// 	isAuthenticated: false,
			// });
			// // Invalidate all queries that might depend on authentication
			// queryClient.invalidateQueries();
		},
	});
};
