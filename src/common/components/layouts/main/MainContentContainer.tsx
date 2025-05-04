export const MainContentContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <div className="min-h-[calc(100vh-65px)]">{children}</div>;
};
