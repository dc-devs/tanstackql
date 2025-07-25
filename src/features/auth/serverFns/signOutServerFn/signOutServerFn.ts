import { GraphQLClient } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { setResponseHeaders } from '@tanstack/react-start/server';
import { MutationSignOutArgs, LogOutResponse } from '@/gql/graphql';
import { SignOutDocument } from '@/features/auth/serverFns/signOutServerFn/SignOutDocument';

export const signOutServerFn = createServerFn({ method: 'POST' })
	.validator((data: MutationSignOutArgs) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();

		// Create GraphQL client with custom fetch to capture response
		let capturedResponse: Response | undefined;

		const client = new GraphQLClient(endpoint, {
			fetch: async (url, init) => {
				const response = await fetch(url, init);

				// Capture the response to extract cookies later
				capturedResponse = response.clone();

				return response;
			},
		});

		// Make the GraphQL request as usual
		const response = (await client.request(SignOutDocument, {
			userId: data.userId,
		})) as { signOut: LogOutResponse };

		// Forward cookies from API response to browser
		if (capturedResponse) {
			const setCookieHeaders = capturedResponse.headers.get('set-cookie');
			if (setCookieHeaders) {
				setResponseHeaders({
					'Set-Cookie': setCookieHeaders,
				});
			}
		}

		return response.signOut;
	});
