import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch all chat sessions
 * @constant {DocumentNode} FindAllChatSessionsDocument
 */
export const FindAllChatSessionsDocument = gql`
	query FindAllChatSessions($where: ChatSessionWhereInput) {
		findAllChatSessions(where: $where) {
			id
			title
			userId
			createdAt
			updatedAt
		}
	}
`;
