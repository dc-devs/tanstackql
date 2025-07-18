import { request } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils';
import { createServerFn } from '@tanstack/react-start';
import { CurrentUserDocument } from '@/serverFns/currentUser/documents';
import { getWebRequest } from '@tanstack/react-start/server';
import type { AuthState } from '@/features/auth/interfaces';

export const fetchCurrentUser = createServerFn({ method: 'GET' }).handler(
	async () => {
		const { headers } = getWebRequest()!;
		const cookie = headers.get('cookie') || '';

		const endpoint = getBackendEndpoint();

		const response = (await request({
			url: endpoint,
			requestHeaders: { cookie },
			document: CurrentUserDocument,
			variables: { errorPolicy: 'ignore' },
		})) as { currentUser: Omit<AuthState, 'isLoading'> };

		return response.currentUser;
	},
);
