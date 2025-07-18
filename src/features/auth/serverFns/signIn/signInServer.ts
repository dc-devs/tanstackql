import { request } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { SessionInput, SessionResponse } from '@/gql/graphql';
import { SignInDocument } from '@/features/auth/serverFns/signIn/SignInDocument';

export const signInServer = createServerFn({ method: 'POST' })
	.validator((data: SessionInput) => data)
	.handler(async ({ data }) => {
		const endpoint = getBackendEndpoint();
		let authSession = null;

		const response = (await request({
			url: endpoint,
			document: SignInDocument,
			variables: { sessionInput: data },
		})) as { signIn: SessionResponse };

		authSession = response.signIn;

		return authSession;
	});
