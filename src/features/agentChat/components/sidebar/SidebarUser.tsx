import { useNavigate } from '@tanstack/react-router';
import { useSignOut } from '@/features/auth/hooks';
import {
	Bell,
	LogOut,
	Sparkles,
	BadgeCheck,
	CreditCard,
	ChevronsUpDown,
} from 'lucide-react';
import {
	Avatar,
	// AvatarImage,
	AvatarFallback,
} from '@/common/components/shadcn-ui/avatar';
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/common/components/shadcn-ui/dropdown-menu';
import {
	useSidebar,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

// TODO: FIX AUTH
export const SidebarUser = () => {
	const navigate = useNavigate();
	const { isMobile } = useSidebar();
	const signOutMutation = useSignOut();
	const user = {
		id: '1',
		email: 'test@test.com',
	};
	const userEmailAbbreviation = user?.email?.charAt(0).toUpperCase() || '?';
	const userEmailName = user?.email?.split('@')[0] || '?';

	const handleLogout = async () => {
		if (user?.id) {
			await signOutMutation.mutateAsync({ userId: user.id });
			navigate({ to: '/' });
		}
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								{/* <AvatarImage
									src={user.avatar}
									alt={user.name}
								/> */}
								<AvatarFallback className="rounded-lg">
									{userEmailAbbreviation}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">
									{userEmailName}
								</span>
								<span className="truncate text-xs">
									{user?.email}
								</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? 'bottom' : 'right'}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									{/* <AvatarImage
										src={user.avatar}
										alt={user.name}
									/> */}
									<AvatarFallback className="rounded-lg">
										{userEmailAbbreviation}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										{userEmailName}
									</span>
									<span className="truncate text-xs">
										{user?.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem className="cursor-pointer">
								<Sparkles />
								Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem className="cursor-pointer">
								<BadgeCheck />
								Account
							</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">
								<CreditCard />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">
								<Bell />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={handleLogout}
							disabled={signOutMutation.isPending}
						>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
