import { gql } from 'graphql-request';

/**
 * GraphQL query to create a message
 * @constant {DocumentNode} CreateMessageDocument
 */
export const CreateMessageDocument = gql`
	mutation CreateMessage($data: MessageCreateInput!, $select: SelectInput) {
		createMessage(data: $data, select: $select) {
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
