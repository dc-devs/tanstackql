import { getRouteApi } from '@tanstack/react-router';
import { UserAvatarMenu } from '@/common/components/layouts/main/common/UserAvatarMenu';
import { UserSessionButtons } from '@/common/components/layouts/main/MainNavigation/UserSessionButtons';

const routeApi = getRouteApi('__root__');

export const SessionButtonsOrAvatar = () => {
	const { authSession } = routeApi.useRouteContext();
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
