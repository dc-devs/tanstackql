import { gql } from 'graphql-request';

/**
 * GraphQL query to fetch the current user's data
 * @constant {DocumentNode} CurrentUserQuery
 */
export const CurrentUserQuery = gql`
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
