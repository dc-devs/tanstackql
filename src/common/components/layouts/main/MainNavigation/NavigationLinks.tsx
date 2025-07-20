import { Link } from '@tanstack/react-router';

export const NavigationLinks = () => {
	return (
		<nav className="hidden md:flex items-center">
			<div className="flex items-center gap-10 text-base font-light text-muted-foreground">
				<Link to="/" className="hover:text-foreground">
					Features
				</Link>
				<Link to="/" className="hover:text-foreground">
					Docs
				</Link>
				<Link to="/" className="hover:text-foreground">
					Demo
				</Link>
			</div>
		</nav>
	);
};
