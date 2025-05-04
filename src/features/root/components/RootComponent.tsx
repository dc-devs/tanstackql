import { Outlet } from '@tanstack/react-router';
import { queryClient } from '~/common/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '~/features/auth/providers/AuthProvider';
import { RootDocument } from '~/features/root/components/RootDocument';

export const RootComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</AuthProvider>
		</QueryClientProvider>
	);
};
