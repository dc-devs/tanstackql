import { Outlet } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { RootDocument } from '~/components/root/RootDocument';
import { MainNavigation } from '~/components/root/MainNavigation/MainNavigation';
import { queryClient } from '~/lib/query-client';

export const RootComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RootDocument>
				<MainNavigation />
				<Outlet />
			</RootDocument>
		</QueryClientProvider>
	);
};
