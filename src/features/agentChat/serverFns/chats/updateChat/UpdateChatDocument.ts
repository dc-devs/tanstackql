import { gql } from 'graphql-request';

/**
 * GraphQL query to update a chat session
 * @constant {DocumentNode} UpdateChatDocument
 */
export const UpdateChatDocument = gql`
	mutation UpdateChat($chatSessionId: Int!, $input: CreateChatInput!) {
		updateChat(chatSessionId: $chatSessionId, input: $input) {
			id
			chatSessionId
			type
			sender
			payload
			content
			timestamp
			createdAt
			updatedAt
		}
	}
`;
