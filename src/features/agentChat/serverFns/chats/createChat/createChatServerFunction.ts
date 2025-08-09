import { createGraphQLRequest } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { CreateChatDocument } from '@/features/agentChat/serverFns/chats/createChat/CreateChatDocument';
import type { CreateChatMutation, CreateChatInput } from '@/gql/graphql';

/**
 * Server function to create a chat session
 * @constant {ServerFn} createChatServerFn
 */
export const createChatServerFn = createServerFn({ method: 'POST' })
	.validator((data: CreateChatInput) => data)
	.handler(async ({ data }) => {
		const { headers } = getWebRequest()!;
		const cookie = headers.get('cookie') || '';

		const response = await createGraphQLRequest<CreateChatMutation>(
			CreateChatDocument,
			{ input: data },
			{ cookie },
		);

		return response.createChat;
	});
