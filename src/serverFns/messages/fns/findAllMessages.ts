import { createServerFn } from '@tanstack/react-start';
import { createGraphQLRequest } from '@/common/utils';
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
		const response = await createGraphQLRequest<FindAllMessagesQuery>(
			FindAllMessagesDocument,
			{ where: data.where },
		);

		return response.findAllMessages;
	});
