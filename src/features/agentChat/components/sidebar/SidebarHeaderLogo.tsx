import { Logo } from '@/common/icons/Logo';
import { Link } from '@tanstack/react-router';
import { Avatar, AvatarFallback } from '@/common/components/shadcn-ui/avatar';
import { DropdownMenu } from '@/common/components/shadcn-ui/dropdown-menu';
import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

export const SidebarHeaderLogo = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<SidebarMenuButton
						size="lg"
						asChild
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground sidebar-menu-button-overrides cursor-pointer hover:bg-transparent hover:text-current active:bg-transparent active:text-current active:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
					>
						<Link to="/">
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarFallback className="rounded-lg bg-transparent">
									<Logo />
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">
									Agent Starter
								</span>
							</div>
						</Link>
					</SidebarMenuButton>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
