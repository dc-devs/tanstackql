import { createServerFn } from '@tanstack/react-start';
import { createGraphQLRequest } from '@/common/utils';
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
		const response = await createGraphQLRequest<FindAllChatSessionsQuery>(
			FindAllChatSessionsDocument,
			{ where: data.where },
		);

		return response.findAllChatSessions;
	});
