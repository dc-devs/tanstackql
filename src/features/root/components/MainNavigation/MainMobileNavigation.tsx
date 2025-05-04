import { useState } from 'react';
import { XIcon, Menu } from 'lucide-react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '~/common/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '~/common/components/ui/sheet';
import { useAuth, useSignOut } from '~/features/auth/hooks';
import type { AuthContextType } from '~/features/auth/interfaces';
import { Avatar, AvatarFallback } from '~/common/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '~/common/components/ui/dropdown-menu';

export const MainMobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const signOutMutation = useSignOut();
	const auth = useAuth() as AuthContextType;
	const isAuthenticated = auth ? auth.isAuthenticated : false;
	const user = auth ? auth.user : null;
	const fetchCurrentUser = auth ? auth.fetchCurrentUser : null;

	const handleLogout = async () => {
		if (user?.id) {
			await signOutMutation.mutateAsync({ userId: user.id });
			if (fetchCurrentUser) {
				await fetchCurrentUser();
			}
			setIsOpen(false);
			navigate({ to: '/' });
		}
	};

	return (
		<div className="flex items-center justify-between w-full px-4 py-2 bg-background md:hidden">
			{/* Hamburger menu trigger */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="h-9 w-9 cursor-pointer"
					>
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="w-full sm:w-full p-0"
					closeButton={false}
				>
					<div className="flex items-center justify-between border-b py-3 px-4 relative">
						<Link to="/" className="flex items-center gap-2">
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
						<Button
							variant="ghost"
							size="icon"
							className="h-8 w-8 cursor-pointer opacity-70 hover:opacity-100"
							onClick={() => setIsOpen(false)}
						>
							<XIcon className="h-4 w-4" />
							<span className="sr-only">Close</span>
						</Button>
					</div>
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
				</SheetContent>
			</Sheet>

			{/* App name/logo centered */}
			<Link
				to="/"
				className="flex-1 flex justify-center items-center gap-2"
			>
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
				<span className="text-lg font-semibold">Agent Starter</span>
			</Link>

			{/* Avatar/profile icon on the right if authenticated */}
			{isAuthenticated && user ? (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="cursor-pointer ml-2">
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
			) : null}
		</div>
	);
};
