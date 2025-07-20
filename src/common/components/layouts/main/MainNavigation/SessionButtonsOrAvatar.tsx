import { Route } from '@/routes/__root';
import { UserAvatarMenu } from '@/common/components/layouts/main/common/UserAvatarMenu';
import { UserSessionButtons } from '@/common/components/layouts/main/MainNavigation/UserSessionButtons';

export const SessionButtonsOrAvatar = () => {
	const { authSession } = Route.useRouteContext();
	const user = authSession?.user;
	const isAuthenticated = authSession?.isAuthenticated;

	return (
		<>
			{isAuthenticated && user ? (
				<UserAvatarMenu />
			) : (
				<UserSessionButtons />
			)}
		</>
	);
};
