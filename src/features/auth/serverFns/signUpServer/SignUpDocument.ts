import { gql } from 'graphql-request';

/**
 * GraphQL mutation to sign in a user
 * @constant {DocumentNode} SignUpDocument
 */
export const SignUpDocument = gql`
	mutation SignUp($data: UserCreateInput!) {
		signUp(data: $data) {
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
