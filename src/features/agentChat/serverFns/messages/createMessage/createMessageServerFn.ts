import { createGraphQLRequest } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { CreateMessageDocument } from '@/features/agentChat/serverFns/messages/createMessage/CreateMessageDocument';
import type { CreateMessageMutation, MessageCreateInput } from '@/gql/graphql';

/**
 * Server function to create a message
 * @constant {ServerFn} createMessageServerFn
 */
export const createMessageServerFn = createServerFn({ method: 'POST' })
	.validator((data: MessageCreateInput) => data)
	.handler(async ({ data }) => {
		const response = await createGraphQLRequest<CreateMessageMutation>(
			CreateMessageDocument,
			{ data },
		);

		return response.createMessage;
	});
