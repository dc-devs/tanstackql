import { createGraphQLRequest } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { CreateChatSessionDocument } from '@/features/agentChat/serverFns/chatSessions/createChatSession/CreateChatSessionDocument';
import type {
	CreateChatSessionMutation,
	CreateChatSessionMutationVariables,
} from '@/gql/graphql';

/**
 * Server function to create a chat session
 * @constant {ServerFn} createChatSessionServerFn
 */
export const createChatSessionServerFn = createServerFn({ method: 'POST' })
	.validator((data: CreateChatSessionMutationVariables) => data)
	.handler(async ({ data }) => {
		const response = await createGraphQLRequest<CreateChatSessionMutation>(
			CreateChatSessionDocument,
			data,
		);

		return response.createChatSession;
	});
