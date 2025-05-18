import { request, gql } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';

export const getMessages = createServerFn({ method: 'GET' }).handler(
	async () => {
		const endpoint = getBackendEndpoint();
		const query = gql`
			query Query {
				findAllMessages {
					id
					type
					sender
					content
					payload
					timestamp
					chatSessionId
				}
			}
		`;
		const response = await request(endpoint, query);

		// @ts-expect-error - response is not typed
		return response.findAllMessages;
	},
);
