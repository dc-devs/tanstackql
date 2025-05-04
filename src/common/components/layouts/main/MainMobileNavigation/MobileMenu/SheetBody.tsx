import { Link } from '@tanstack/react-router';
import { Button } from '~/common/components/ui/button';

interface Props {
	isAuthenticated: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const SheetBody = ({ setIsOpen, isAuthenticated }: Props) => {
	return (
		<nav className="flex flex-col px-4 pb-3">
			<Link
				to="/"
				className="text-muted-foreground text-base font-light py-2 hover:text-foreground"
				onClick={() => setIsOpen(false)}
			>
				Features
			</Link>
			<Link
				to="/"
				className="text-muted-foreground text-base font-light py-2 hover:text-foreground"
				onClick={() => setIsOpen(false)}
			>
				Docs
			</Link>
			<Link
				to="/"
				className="text-muted-foreground text-base font-light py-2 hover:text-foreground"
				onClick={() => setIsOpen(false)}
			>
				Demo
			</Link>
			{!isAuthenticated && (
				<div className="flex flex-col gap-3 mt-4">
					<Link to="/signin">
						<Button
							variant="outline"
							className="w-full justify-center text-base font-medium h-9 px-6 text-primary border-primary cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							Log In
						</Button>
					</Link>
					<Link to="/signup">
						<Button
							className="w-full justify-center text-base font-medium h-9 px-6 cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							Sign Up
						</Button>
					</Link>
				</div>
			)}
		</nav>
	);
};
