import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch all chat sessions
 * @constant {DocumentNode} CreateChatDocument
 */
export const CreateChatDocument = gql`
	mutation CreateChat($input: CreateChatInput!) {
		createChat(input: $input) {
			id
			title
			userId
			createdAt
			updatedAt
			messages {
				id
				type
				sender
				content
				timestamp
				updatedAt
				createdAt
			}
		}
	}
`;
