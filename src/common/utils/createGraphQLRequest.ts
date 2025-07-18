import { request, type RequestDocument, type Variables } from 'graphql-request';
import { getBackendEndpoint } from '@/common/utils/getBackendEndpoint';
import { isDevelopment } from '@/common/constants/environment';

/**
 * Creates a GraphQL request with proper SSL configuration for development
 * @param document - GraphQL document to execute
 * @param variables - Variables for the GraphQL query/mutation
 * @param requestHeaders - Additional request headers
 * @returns Promise with the GraphQL response
 */
export const createGraphQLRequest = async <
	T = any,
	V extends Variables = Variables,
>(
	document: RequestDocument,
	variables?: V,
	requestHeaders?: HeadersInit,
): Promise<T> => {
	const endpoint = getBackendEndpoint();

	// In development, bypass SSL verification for local.nestql.com
	if (isDevelopment && endpoint.includes('local.nestql.com')) {
		// For Node.js environments, we need to configure the HTTPS agent
		const originalRejectUnauthorized =
			process.env.NODE_TLS_REJECT_UNAUTHORIZED;
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

		try {
			const response = await request<T, V>(
				endpoint,
				document,
				variables,
				requestHeaders,
			);
			return response;
		} finally {
			// Restore the original setting
			if (originalRejectUnauthorized !== undefined) {
				process.env.NODE_TLS_REJECT_UNAUTHORIZED =
					originalRejectUnauthorized;
			} else {
				delete process.env.NODE_TLS_REJECT_UNAUTHORIZED;
			}
		}
	}

	// For production or non-local endpoints, use normal request
	return request<T, V>(endpoint, document, variables, requestHeaders);
};
