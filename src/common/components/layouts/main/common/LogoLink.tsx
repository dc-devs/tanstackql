import { Logo } from '@/common/icons';
import { cn } from '@/common/lib/utils';
import { Link } from '@tanstack/react-router';

export const LogoLink = ({ className }: { className?: string }) => {
	return (
		<Link to="/" className={cn('flex items-center gap-2', className)}>
			<Logo className="h-5 w-5" />
			<span className="text-lg font-semibold">Agent Starter</span>
		</Link>
	);
};
