import { Outlet } from '@tanstack/react-router';
import { queryClient } from '~/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '~/features/auth/providers/AuthProvider';
import { RootDocument } from '~/components/root/RootDocument';
import { MainNavigation } from '~/components/root/MainNavigation/MainNavigation';

export const RootComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RootDocument>
					<MainNavigation />
					<Outlet />
				</RootDocument>
			</AuthProvider>
		</QueryClientProvider>
	);
};
