import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch the current user's data
 * @constant {DocumentNode} CurrentUserDocument
 */
export const CurrentUserDocument = gql`
	query CurrentUser {
		currentUser {
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
