import { Endpoint } from '@/common/enums/Endpoint';
import { isDevelopment } from '@/common/constants/environment';

/**
 * Returns the appropriate backend endpoint based on the environment
 * @returns {string} The backend endpoint
 */
export const getBackendEndpoint = () => {
	return isDevelopment ? Endpoint.BackendLocal : Endpoint.BackendProduction;
};
