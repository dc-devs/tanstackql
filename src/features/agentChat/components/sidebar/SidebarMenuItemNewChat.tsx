import { Plus } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Avatar, AvatarFallback } from '@/common/components/shadcn-ui/avatar';
import { DropdownMenu } from '@/common/components/shadcn-ui/dropdown-menu';
import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

export const SidebarMenuItemNewChat = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<SidebarMenuButton size="lg" asChild>
						<Link
							preload={false}
							to="/agent/chats/new"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground sidebar-menu-button-overrides cursor-pointer"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarFallback className="rounded-lg bg-transparent">
									<Plus className="text-primary" />
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">
									New Chat
								</span>
							</div>
						</Link>
					</SidebarMenuButton>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
