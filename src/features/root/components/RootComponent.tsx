import { Outlet } from '@tanstack/react-router';
import { RootDocument } from '@/features/root/components/RootDocument';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const RootComponent = () => {
	return (
		<>
			<RootDocument>
				<Outlet />
			</RootDocument>
			{/* <ReactQueryDevtools initialIsOpen={false} />
			<TanStackRouterDevtools position="bottom-left" /> */}
		</>
	);
};
