import { LogoLink } from '@/common/components/layouts/main/common';
import { NavigationLinks } from '@/common/components/layouts/main/MainNavigation/NavigationLinks';
import { SessionButtonsOrAvatar } from '@/common/components/layouts/main/MainNavigation/SessionButtonsOrAvatar';

export const MainNavigation = () => {
	return (
		<header className="hidden md:block sticky top-0 z-10 bg-background w-full border-b">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center">
					<LogoLink className="mr-12" />
					<NavigationLinks />
				</div>

				<div className="hidden md:flex items-center gap-3 relative">
					<SessionButtonsOrAvatar />
				</div>
			</div>
		</header>
	);
};
