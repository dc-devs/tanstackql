import { createServerFn } from '@tanstack/react-start';
import { createGraphQLRequest } from '@/common/utils';
import { FindOneMessageDocument } from '@/features/agentChat/serverFns/messages/findOneMessage/FindOneMessageDocument';
import type {
	FindOneMessageQuery,
	FindOneMessageQueryVariables,
} from '@/gql/graphql';

/**
 * Server function to find one message
 * @constant {ServerFn} findOneMessageServerFn
 */
export const findOneMessageServerFn = createServerFn({ method: 'GET' })
	.validator((data: FindOneMessageQueryVariables) => data)
	.handler(async ({ data }) => {
		const response = await createGraphQLRequest<FindOneMessageQuery>(
			FindOneMessageDocument,
			{ where: data.where },
		);

		return response.findOneMessage;
	});
