import { request } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { graphql } from '@/gql/gql';
import type {
	GetMessagesQuery,
	GetMessagesQueryVariables,
} from '@/gql/graphql';

// Define the query using the graphql tag
const GetMessagesDocument = graphql(`
	query GetMessages($where: MessageWhereInput) {
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

type WhereInput = GetMessagesQueryVariables['where'];

export const getMessages = createServerFn({ method: 'GET' })
	.validator((data: { where?: WhereInput }) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();
		const response = await request<GetMessagesQuery>(
			endpoint,
			GetMessagesDocument,
			{ where: data.where },
		);

		return response.findAllMessages;
	});
