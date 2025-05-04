import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '~/common/components/ui/button';
import { useAuth, useSignOut } from '~/features/auth/hooks';
import { MainMobileNavigation } from './MainMobileNavigation';
import type { AuthContextType } from '~/features/auth/interfaces';
import { Avatar, AvatarFallback } from '~/common/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '~/common/components/ui/dropdown-menu';

export const MainNavigation = () => {
	const navigate = useNavigate();
	const signOutMutation = useSignOut();
	const auth = useAuth() as AuthContextType;
	const isAuthenticated = auth ? auth.isAuthenticated : false;
	const user = auth ? auth.user : null;
	const fetchCurrentUser = auth ? auth.fetchCurrentUser : null;
	const handleLogout = async () => {
		if (user?.id) {
			await signOutMutation.mutateAsync({ userId: user.id });

			// Refetch the user data to update the auth context
			if (fetchCurrentUser) {
				await fetchCurrentUser();
			}

			navigate({ to: '/' });
		}
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center">
					<Link to="/" className="flex items-center gap-2 mr-12">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-5 w-5 text-primary"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
						</svg>
						<span className="text-lg font-semibold">
							Agent Starter
						</span>
					</Link>

					{/* Desktop Navigation */}
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
				</div>

				{/* Auth Buttons or Avatar - Desktop */}
				<div className="hidden md:flex items-center gap-3 relative">
					{isAuthenticated && user ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Avatar className="cursor-pointer">
									<AvatarFallback>
										{user.email?.[0]?.toUpperCase() || '?'}
									</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem
									onClick={handleLogout}
									className="text-red-600 cursor-pointer"
								>
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<>
							<Link to="/signin">
								<Button
									size="sm"
									variant="outline"
									className="h-9 px-4 rounded-md text-base text-primary border-primary cursor-pointer"
								>
									Log In
								</Button>
							</Link>
							<Link to="/signup">
								<Button
									size="sm"
									className="h-9 px-4 rounded-md text-base cursor-pointer"
								>
									Sign Up
								</Button>
							</Link>
						</>
					)}
				</div>

				<MainMobileNavigation />
			</div>
		</header>
	);
};
