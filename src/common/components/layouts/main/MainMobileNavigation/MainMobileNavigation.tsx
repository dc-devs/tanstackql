import { useState } from 'react';
import { MobileMenu } from '@/common/components/layouts/main/MainMobileNavigation/MobileMenu/MobileMenu';
import {
	LogoLink,
	UserAvatarMenu,
} from '@/common/components/layouts/main/common';

// TODO: FIX AUTH
export const MainMobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	// const isAuthenticated = auth ? auth.isAuthenticated : false;
	const isAuthenticated = false;

	return (
		<header className="md:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex items-center justify-between w-full px-4 py-2 bg-background">
				<div className="w-[40px] flex justify-center items-center">
					<MobileMenu
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						isAuthenticated={isAuthenticated}
					/>
				</div>

				<LogoLink />

				<div className="w-[40px] h-[40px] flex justify-center items-center">
					{isAuthenticated ? <UserAvatarMenu /> : null}
				</div>
			</div>
		</header>
	);
};
