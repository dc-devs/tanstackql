import { useState } from 'react';
import { getRouteApi } from '@tanstack/react-router';
import { MobileMenu } from '@/common/components/layouts/main/MainMobileNavigation/MobileMenu/MobileMenu';
import {
	LogoLink,
	UserAvatarMenu,
} from '@/common/components/layouts/main/common';

const routeApi = getRouteApi('__root__');

export const MainMobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { authSession } = routeApi.useRouteContext();
	const isAuthenticated = authSession?.isAuthenticated;

	return (
		<header className="md:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex items-center justify-between w-full px-4 py-2 bg-background">
				<div className="w-[40px] flex justify-center items-center">
					<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>

				<LogoLink />

				<div className="w-[40px] h-[40px] flex justify-center items-center">
					{isAuthenticated ? <UserAvatarMenu /> : null}
				</div>
			</div>
		</header>
	);
};
