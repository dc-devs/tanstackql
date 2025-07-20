import { Route } from '@/routes/__root';
import { Link } from '@tanstack/react-router';
import { Button } from '@/common/components/shadcn-ui/button';

interface Props {
	setIsOpen: (isOpen: boolean) => void;
}

export const SheetBody = ({ setIsOpen }: Props) => {
	const { authSession } = Route.useRouteContext();
	const isAuthenticated = authSession?.isAuthenticated;

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
				<>
					<div className="my-4 border-t border-muted" />
					<div className="flex flex-col gap-2">
						<Link to="/signup">
							<Button
								className="w-full justify-center text-base font-medium h-10 px-6 cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								Sign Up
							</Button>
						</Link>
						<Link to="/signin">
							<Button
								variant="outline"
								className="w-full justify-center text-base font-medium h-10 px-6 text-primary border-primary cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								Log In
							</Button>
						</Link>
					</div>
				</>
			)}
		</nav>
	);
};
