import { gql } from 'graphql-request';

/**
 * GraphQL query to find all messages
 * @constant {DocumentNode} FindAllMessagesDocument
 */
export const FindAllMessagesDocument = gql`
	query FindAllMessages($where: MessageWhereInput) {
		findAllMessages(where: $where) {
			id
			chatSessionId
			content
			payload
			type
			sender
			timestamp
			createdAt
			updatedAt
		}
	}
`;
