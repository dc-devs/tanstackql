import { Scripts } from '@tanstack/react-start';
import { HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const RootDocument = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className="min-w-full min-h-full">
			<head>
				<HeadContent />
			</head>
			<body className="min-w-full min-h-full">
				{children}
				<TanStackRouterDevtools position="bottom-right" />
				<Scripts />
			</body>
		</html>
	);
};
