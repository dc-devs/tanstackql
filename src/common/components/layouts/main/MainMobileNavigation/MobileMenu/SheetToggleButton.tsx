import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';

export const SheetToggleButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button>
>((props, ref) => (
	<Button
		ref={ref}
		variant="ghost"
		size="icon"
		className="cursor-pointer"
		{...props}
	>
		<Menu className="!w-[27px] !h-[27px] !size-27" size={27} />
		<span className="sr-only">Toggle menu</span>
	</Button>
));
