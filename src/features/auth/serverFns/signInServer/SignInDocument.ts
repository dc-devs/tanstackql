import { gql } from 'graphql-request';

/**
 * GraphQL mutation to sign in a user
 * @constant {DocumentNode} SignInDocument
 */
export const SignInDocument = gql`
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
