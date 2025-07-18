import { useAuth } from '@/features/auth/hooks';
import type { AuthContextType } from '@/features/auth/interfaces';
import { UserAvatarMenu } from '@/common/components/layouts/main/common/UserAvatarMenu';
import { UserSessionButtons } from '@/common/components/layouts/main/MainNavigation/UserSessionButtons';

export const SessionButtonsOrAvatar = () => {
	const auth = useAuth() as AuthContextType;
	const user = auth ? auth.user : null;
	const isAuthenticated = auth ? auth.isAuthenticated : false;

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
