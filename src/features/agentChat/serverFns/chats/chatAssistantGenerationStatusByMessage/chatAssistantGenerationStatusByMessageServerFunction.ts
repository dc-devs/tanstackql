import { createGraphQLRequest } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import type {
	ChatAssistantGenerationStatusByMessageQuery,
	ChatAssistantGenerationStatusByMessageQueryVariables,
} from '@/gql/graphql';
import { ChatAssistantGenerationStatusByMessageDocument } from '@/features/agentChat/serverFns/chats/chatAssistantGenerationStatusByMessage/ChatAssistantGenerationStatusByMessageDocument';

/**
 * Server function to get the status of the assistant message generation for a given message
 * @constant {ServerFn} chatAssistantGenerationStatusByMessageServerFunction
 */
export const chatAssistantGenerationStatusByMessageServerFunction =
	createServerFn({
		method: 'POST',
	})
		.validator(
			(data: ChatAssistantGenerationStatusByMessageQueryVariables) =>
				data,
		)
		.handler(async ({ data }) => {
			const { headers } = getWebRequest()!;
			const cookie = headers.get('cookie') || '';

			const response =
				await createGraphQLRequest<ChatAssistantGenerationStatusByMessageQuery>(
					ChatAssistantGenerationStatusByMessageDocument,
					{
						chatSessionId: data.chatSessionId,
						lastUserMessageId: data.lastUserMessageId,
					},
					{ cookie },
				);

			return response.chatAssistantGenerationStatusByMessage;
		});
