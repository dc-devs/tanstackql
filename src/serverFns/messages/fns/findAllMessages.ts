import { request } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { FindAllMessagesDocument } from '@/serverFns/messages/documents';
import type {
	FindAllMessagesQuery,
	FindAllMessagesQueryVariables,
} from '@/gql/graphql';
/**
 * Server function to find all messages
 * @constant {ServerFn} findAllMessages
 */
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
