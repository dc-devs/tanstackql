import { Scripts } from '@tanstack/react-start';
import { HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const RootDocument = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className="min-w-full min-h-full">
			<head>
				<HeadContent />
			</head>
			<body className="min-w-full min-h-full">
				{children}
				<TanStackRouterDevtools position="bottom-right" />
				{/* <ReactQueryDevtools initialIsOpen={true} /> */}
				<Scripts />
			</body>
		</html>
	);
};
