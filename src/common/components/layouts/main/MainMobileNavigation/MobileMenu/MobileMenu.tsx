import { SheetBody } from '@/common/components/layouts/main/MainMobileNavigation/MobileMenu/SheetBody';
import { SheetHeader } from '@/common/components/layouts/main/MainMobileNavigation/MobileMenu/SheetHeader';
import { SheetToggleButton } from '@/common/components/layouts/main/MainMobileNavigation/MobileMenu/SheetToggleButton';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/common/components/shadcn-ui/sheet';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<SheetToggleButton />
			</SheetTrigger>

			<SheetContent side="left" className="w-full sm:w-full p-0">
				<SheetHeader setIsOpen={setIsOpen} />
				<SheetBody setIsOpen={setIsOpen} />
			</SheetContent>
		</Sheet>
	);
};
