export const MainContentContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="min-w-full min-h-[calc(100vh-65px)] flex flex-col items-center">
			<div className="container">{children}</div>
		</div>
	);
};
