import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch the status of the assistant message generation for a given message
 * @constant {DocumentNode} ChatAssistantGenerationStatusByMessageDocument
 */
export const ChatAssistantGenerationStatusByMessageDocument = gql`
	query ChatAssistantGenerationStatusByMessage(
		$chatSessionId: Int!
		$lastUserMessageId: Int!
	) {
		chatAssistantGenerationStatusByMessage(
			chatSessionId: $chatSessionId
			lastUserMessageId: $lastUserMessageId
		) {
			lastUserMessageId
			status
		}
	}
`;
