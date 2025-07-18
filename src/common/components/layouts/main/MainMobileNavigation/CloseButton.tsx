import { XIcon } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';

interface Props {
	setIsOpen: (isOpen: boolean) => void;
}

export const CloseButton = ({ setIsOpen }: Props) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			className="h-8 w-8 cursor-pointer opacity-70 hover:opacity-100"
			onClick={() => setIsOpen(false)}
		>
			<XIcon className="h-4 w-4" />
			<span className="sr-only">Close</span>
		</Button>
	);
};
