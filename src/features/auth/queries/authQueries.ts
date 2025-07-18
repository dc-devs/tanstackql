import { queryOptions } from '@tanstack/react-query';
import { type RequestDocument } from 'graphql-request';
import { createGraphQLRequest } from '@/common/utils';
import { CurrentUserDocument } from '../../../serverFns/currentUser/documents/CurrentUserDocument';
import type { AuthState } from '../interfaces';

// Helper to make authenticated GraphQL requests
const authenticatedRequest = async <T>(
	document: RequestDocument,
	headers?: HeadersInit,
) => {
	return createGraphQLRequest<T>(document, undefined, {
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
