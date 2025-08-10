import { createGraphQLRequest } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { UpdateChatDocument } from '@/features/agentChat/serverFns/chats/updateChat/UpdateChatDocument';
import type { UpdateChatMutation, CreateChatInput } from '@/gql/graphql';

/**
 * Server function to create a chat session
 * @constant {ServerFn} updateChatServerFn
 */
export const updateChatServerFn = createServerFn({ method: 'POST' })
	.validator(
		(data: { chatSessionId: number; updateChatInput: CreateChatInput }) =>
			data,
	)
	.handler(async ({ data }) => {
		const { headers } = getWebRequest()!;
		const cookie = headers.get('cookie') || '';

		const response = await createGraphQLRequest<UpdateChatMutation>(
			UpdateChatDocument,
			{ chatSessionId: data.chatSessionId, input: data.updateChatInput },
			{ cookie },
		);

		return response.updateChat;
	});
