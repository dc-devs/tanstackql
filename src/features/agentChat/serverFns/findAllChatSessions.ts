import { request, gql } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';

type WhereInput = {
	userId?: {
		equals?: number;
	};
};

export const findAllChatSessions = createServerFn({ method: 'GET' })
	.validator((data: { where?: WhereInput }) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();
		const query = gql`
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
		const response = await request(endpoint, query, { where: data.where });

		// @ts-expect-error - response is not typed
		return response.findAllChatSessions;
	});
