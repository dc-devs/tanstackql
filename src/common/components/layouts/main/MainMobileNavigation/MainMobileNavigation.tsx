import { useState } from 'react';
import { useAuth } from '~/features/auth/hooks';
import type { AuthContextType } from '~/features/auth/interfaces';
import { LogoLink } from '~/common/components/layouts/main/LogoLink';
import { UserAvatarMenu } from '~/common/components/layouts/main/UserAvatarMenu';
import { MobileMenu } from '~/common/components/layouts/main/MainMobileNavigation/MobileMenu';

export const MainMobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const auth = useAuth() as AuthContextType;
	const isAuthenticated = auth ? auth.isAuthenticated : false;

	return (
		<header className="md:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex items-center justify-between w-full px-4 py-2 bg-background">
				<MobileMenu
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isAuthenticated={isAuthenticated}
				/>

				<div className="flex-1 flex justify-center items-center gap-2">
					<LogoLink />
				</div>

				{isAuthenticated ? <UserAvatarMenu /> : null}
			</div>
		</header>
	);
};
