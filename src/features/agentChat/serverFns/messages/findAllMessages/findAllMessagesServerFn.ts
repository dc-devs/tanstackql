import { createServerFn } from '@tanstack/react-start';
import { createGraphQLRequest } from '@/common/utils';
import { FindAllMessagesDocument } from '@/features/agentChat/serverFns/messages/findAllMessages/FindAllMessagesDocument';
import type {
	FindAllMessagesQuery,
	FindAllMessagesQueryVariables,
} from '@/gql/graphql';

/**
 * Server function to find all messages
 * @constant {ServerFn} findAllMessagesServerFn
 */
export const findAllMessagesServerFn = createServerFn({ method: 'GET' })
	.validator((data: FindAllMessagesQueryVariables) => data)
	.handler(async ({ data }) => {
		const response = await createGraphQLRequest<FindAllMessagesQuery>(
			FindAllMessagesDocument,
			{ where: data.where },
		);

		return response.findAllMessages;
	});
