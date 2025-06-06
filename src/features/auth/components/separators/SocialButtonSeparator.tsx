import { Separator } from '@/common/components/shadcn-ui/separator';

export const SocialButtonSeparator = () => {
	return (
		<div className="relative">
			<div className="absolute inset-0 flex items-center">
				<Separator className="w-full" />
			</div>
			<div className="relative flex justify-center text-xs uppercase">
				<span className="bg-background px-2 text-muted-foreground">
					or continue with
				</span>
			</div>
		</div>
	);
};
