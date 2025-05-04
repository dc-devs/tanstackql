import { gql } from 'graphql-request';

/**
 * GraphQL mutation to sign out a user
 * @constant {DocumentNode} SignOutMutation
 */
export const SignOutMutation = gql`
	mutation SignOut($userId: String!) {
		signOut(userId: $userId) {
			isAuthenticated
			userId
		}
	}
`;
