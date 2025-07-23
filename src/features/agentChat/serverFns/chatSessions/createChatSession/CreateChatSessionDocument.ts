import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch all chat sessions
 * @constant {DocumentNode} CreateChatSessionDocument
 */
export const CreateChatSessionDocument = gql`
	mutation CreateChatSession($data: ChatSessionCreateInput!) {
		createChatSession(data: $data) {
			id
			title
			userId
			createdAt
			updatedAt
		}
	}
`;
