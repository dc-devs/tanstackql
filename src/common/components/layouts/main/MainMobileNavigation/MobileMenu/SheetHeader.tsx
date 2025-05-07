import { LogoLink } from '@/common/components/layouts/main/common';
import { CloseButton } from '@/common/components/layouts/main/MainMobileNavigation/CloseButton';

interface Props {
	setIsOpen: (isOpen: boolean) => void;
}

export const SheetHeader = ({ setIsOpen }: Props) => {
	return (
		<div className="flex items-center justify-between border-b py-3 px-4 relative">
			<LogoLink />
			<CloseButton setIsOpen={setIsOpen} />
		</div>
	);
};
