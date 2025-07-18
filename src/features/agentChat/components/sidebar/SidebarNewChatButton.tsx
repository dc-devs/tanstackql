import { Plus } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

const buttonCss =
	'h-[40px] hover:bg-primary/90 hover:text-primary-foreground bg-primary text-primary-foreground cursor-pointer ';

export const SidebarNewChatButton = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Link
					to="/agent/chats"
					className="grid flex-1 text-left text-sm leading-tight"
				>
					<SidebarMenuButton
						size="lg"
						className={`${buttonCss} mt-5 flex items-center gap-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:shadow-none`}
					>
						<div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
							<Plus className="size-5" />
						</div>
						<span className="truncate font-semibold">New Chat</span>
					</SidebarMenuButton>
				</Link>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
