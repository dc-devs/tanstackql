import { request } from 'graphql-request';
import { SessionResponse } from '@/gql/graphql';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { GetAuthSessionDocument } from '@/features/auth/serverFns/getAuthSessionServer/GetAuthSessionDocument';

export const getAuthSessionServer = createServerFn({ method: 'POST' }).handler(
	async () => {
		const { headers } = getWebRequest()!;
		const cookie = headers.get('cookie') || '';
		const endpoint = getBackendEndpoint();
		let authSession = null;

		try {
			const response = (await request({
				url: endpoint,
				requestHeaders: { cookie },
				document: GetAuthSessionDocument,
			})) as { getAuthSession: SessionResponse };

			authSession = response.getAuthSession;
		} catch {}

		return authSession;
	},
);
