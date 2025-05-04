export const MainContentContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="border-1 border-green-500 min-h-[calc(100vh-65px)]">
			{children}
		</div>
	);
};
