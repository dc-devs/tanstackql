import { MainNavigation } from '@/common/components/layouts/main/MainNavigation';
import { MainMobileNavigation } from '@/common/components/layouts/main/MainMobileNavigation';
import { MainContentContainer } from '@/common/components/layouts/main/MainContentContainer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<MainNavigation />
			<MainMobileNavigation />
			<MainContentContainer>{children}</MainContentContainer>
		</>
	);
};
