import { gql } from 'graphql-request';

/**
 * GraphQL query to find all messages
 * @constant {DocumentNode} FindOneMessageDocument
 */
export const FindOneMessageDocument = gql`
	query FindOneMessage($where: MessageWhereUniqueInput!) {
		findOneMessage(where: $where) {
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
