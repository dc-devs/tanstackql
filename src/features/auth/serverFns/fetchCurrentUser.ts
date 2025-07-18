import { createServerFn } from '@tanstack/react-start';
import { createGraphQLRequest } from '@/common/utils';
import { CurrentUserDocument } from '@/serverFns/currentUser/documents';
import { getWebRequest } from '@tanstack/react-start/server';
import type { AuthState } from '@/features/auth/interfaces';

export const fetchCurrentUser = createServerFn({ method: 'GET' }).handler(
	async () => {
		const { headers } = getWebRequest()!;
		const cookie = headers.get('cookie') || '';

		const response = (await createGraphQLRequest(
			CurrentUserDocument,
			{ errorPolicy: 'ignore' },
			{ cookie },
		)) as { currentUser: Omit<AuthState, 'isLoading'> };

		return response.currentUser;
	},
);
