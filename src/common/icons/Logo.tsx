import { cn } from '@/common/lib/cn';

export const Logo = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={cn('h-5 w-5 text-primary', className)}
		>
			<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
		</svg>
	);
};
