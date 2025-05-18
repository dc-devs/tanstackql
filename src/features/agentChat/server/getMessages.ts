import { request, gql } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';

type WhereInput = {
	chatSessionId?: {
		equals?: number;
	};
};

export const getMessages = createServerFn({ method: 'GET' })
	.validator((data: { where?: WhereInput }) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();
		const query = gql`
			query Query($where: MessageWhereInput) {
				findAllMessages(where: $where) {
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
		const response = await request(endpoint, query, { where: data.where });

		// @ts-expect-error - response is not typed
		return response.findAllMessages;
	});
