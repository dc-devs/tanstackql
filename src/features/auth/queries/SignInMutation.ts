import { gql } from 'graphql-request';

/**
 * GraphQL mutation to sign in a user
 * @constant {DocumentNode} SignInMutation
 */
export const SignInMutation = gql`
	mutation SignIn($sessionInput: SessionInput!) {
		signIn(sessionInput: $sessionInput) {
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
