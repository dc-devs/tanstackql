import { graphql } from '@/gql/gql';
import { request } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import type {
	FindAllMessagesQuery,
	FindAllMessagesQueryVariables,
} from '@/gql/graphql';

// Define the query using the graphql tag
const FindAllMessagesDocument = graphql(`
	query FindAllMessages($where: MessageWhereInput) {
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
`);

export const findAllMessages = createServerFn({ method: 'GET' })
	.validator((data: FindAllMessagesQueryVariables) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();
		const response = await request<FindAllMessagesQuery>(
			endpoint,
			FindAllMessagesDocument,
			{ where: data.where },
		);

		return response.findAllMessages;
	});
