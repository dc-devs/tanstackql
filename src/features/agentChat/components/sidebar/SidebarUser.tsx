import { useMutation } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { useNavigate } from '@tanstack/react-router';
import { signOutServerFn } from '@/features/auth/serverFns/signOutServerFn/signOutServerFn';
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
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/common/components/shadcn-ui/dropdown-menu';
import {
	useSidebar,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

import { getRouteApi } from '@tanstack/react-router';
const routeApi = getRouteApi('__root__');

export function SidebarUser() {
	const navigate = useNavigate();
	const { authSession } = routeApi.useRouteContext();
	const user = authSession?.user;
	const userId = user!.id;
	const signOutMutation = useMutation({
		mutationFn: useServerFn(signOutServerFn),
	});
	const handleLogout = async () => {
		const data = { userId };

		await signOutMutation.mutateAsync({ data });
		navigate({ to: '/' });
	};
	const { isMobile } = useSidebar();
	const userEmail = user?.email;
	const userEmailAbbreviation = user?.email?.charAt(0).toUpperCase() || '?';
	const userEmailName = user?.email?.split('@')[0] || '?';

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground sidebar-menu-button-overrides cursor-pointer"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								{/* <AvatarImage
									src="https://ui.shadcn.com/avatars/shadcn.jpg"
									alt="shadCN"
								/> */}
								<AvatarFallback className="rounded-lg">
									{userEmailAbbreviation}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">
									{userEmailName}
								</span>
								<span className="truncate text-xs">
									{userEmail}
								</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? 'bottom' : 'right'}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									{/* <AvatarImage
										src="https://ui.shadcn.com/avatars/shadcn.jpg"
										alt="shadCN"
									/> */}
									<AvatarFallback className="rounded-lg">
										{userEmailAbbreviation}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										{userEmailName}
									</span>
									<span className="truncate text-xs">
										{userEmail}
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
}
