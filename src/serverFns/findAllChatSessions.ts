import { request, gql } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import type {
	FindAllChatSessionsQuery,
	FindAllChatSessionsQueryVariables,
} from '@/gql/graphql';

const FindAllChatSessionsDocument = gql`
	query FindAllChatSessions($where: ChatSessionWhereInput) {
		findAllChatSessions(where: $where) {
			id
			title
			userId
			createdAt
			updatedAt
		}
	}
`;

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
