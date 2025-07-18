import { Scripts } from '@tanstack/react-router';
import { HeadContent } from '@tanstack/react-router';

export const RootDocument = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className="min-w-full min-h-full">
			<head>
				<HeadContent />
			</head>
			<body className="min-w-full min-h-full">
				{children}
				<Scripts />
			</body>
		</html>
	);
};
