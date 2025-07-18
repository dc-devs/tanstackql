import { request } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { FindAllChatSessionsDocument } from '@/serverFns/chatSessions/documents';
import type {
	FindAllChatSessionsQuery,
	FindAllChatSessionsQueryVariables,
} from '@/gql/graphql';

/**
 * Server function to find all chat sessions
 * @constant {ServerFn} findAllChatSessions
 */
export const findAllChatSessions = createServerFn({ method: 'GET' })
	.validator((data: FindAllChatSessionsQueryVariables) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();
		const response = await request<FindAllChatSessionsQuery>(
			endpoint,
			FindAllChatSessionsDocument,
			{ where: data.where },
		);

		return response.findAllChatSessions;
	});
