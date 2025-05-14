import { createServerFn } from '@tanstack/react-start';
import { request, gql } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';

export const getChatSessions = createServerFn({ method: 'GET' }).handler(
	async () => {
		const endpoint = getBackendEndpoint();
		const query = gql`
			query Query {
				findAllChatSessions {
					id
					title
					userId
					createdAt
					updatedAt
				}
			}
		`;
		const response = await request(endpoint, query);

		// @ts-expect-error - response is not typed
		return response.findAllChatSessions;
	},
);
