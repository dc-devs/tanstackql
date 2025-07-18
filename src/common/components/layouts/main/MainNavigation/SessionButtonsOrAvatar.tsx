import { UserAvatarMenu } from '@/common/components/layouts/main/common/UserAvatarMenu';
import { UserSessionButtons } from '@/common/components/layouts/main/MainNavigation/UserSessionButtons';

// TODO: FIX AUTH
export const SessionButtonsOrAvatar = () => {
	const isAuthenticated = false;
	const user = null;

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
