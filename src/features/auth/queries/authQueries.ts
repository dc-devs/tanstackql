import { queryOptions } from '@tanstack/react-query';
import { request, type RequestDocument } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { CurrentUserDocument } from '../../../serverFns/currentUser/documents/CurrentUserDocument';
import type { AuthState } from '../interfaces';

// Helper to make authenticated GraphQL requests
const authenticatedRequest = async <T>(
	document: RequestDocument,
	headers?: HeadersInit,
) => {
	const endpoint = getBackendEndpoint();
	return request<T>(endpoint, document, undefined, {
		credentials: 'include',
		...headers,
	});
};

export const currentUserQuery = queryOptions({
	queryKey: ['auth', 'currentUser'],
	queryFn: async ({ meta }: { meta?: { headers?: HeadersInit } }) => {
		const response = await authenticatedRequest<{
			currentUser: Omit<AuthState, 'isLoading'>;
		}>(CurrentUserDocument, meta?.headers);

		return response.currentUser;
	},
});
