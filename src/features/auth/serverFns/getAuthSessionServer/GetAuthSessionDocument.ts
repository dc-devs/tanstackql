import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch the current user's data
 * @constant {DocumentNode} GetAuthSessionDocument
 */
export const GetAuthSessionDocument = gql`
	query GetAuthSession {
		getAuthSession {
			isAuthenticated
			user {
				id
				role
				email
				createdAt
				updatedAt
			}
		}
	}
`;
