import { gql } from 'graphql-request';

/**
 * GraphQL mutation to sign out a user
 * @constant {DocumentNode} SignOutDocument
 */
export const SignOutDocument = gql`
	mutation SignOut($userId: String!) {
		signOut(userId: $userId) {
			isAuthenticated
			userId
		}
	}
`;
