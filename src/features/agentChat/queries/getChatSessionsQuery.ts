import { gql } from 'graphql-request';
import { queryOptions } from '@tanstack/react-query';
import { getBackendEndpoint } from '@/common/utils';
import { request, type RequestDocument } from 'graphql-request';

/**
 * GraphQL query to fetch all chat sessions
 * @constant {DocumentNode} FindAllChatSessionsQuery
 */
export const FindAllChatSessionsQuery = gql`
	query FindAllChatSessionsClient {
		findAllChatSessions {
			id
			title
			userId
			createdAt
			updatedAt
		}
	}
`;

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

export const getChatSessionsQuery = queryOptions({
	queryKey: ['chat-sessions'],
	queryFn: async ({ meta }: { meta?: { headers?: HeadersInit } }) => {
		const response = await authenticatedRequest(
			FindAllChatSessionsQuery,
			meta?.headers,
		);
		console.log(response);

		// @ts-expect-error - response is not typed
		return response.findAllChatSessions;
	},
});
