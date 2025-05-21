import { Logo } from '@/common/icons/Logo';
import { Link } from '@tanstack/react-router';
import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

export const SidebarHeaderLogo = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton
					size="lg"
					className="flex items-center gap-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-inherit hover:text-inherit hover:shadow-none !hover:bg-inherit !hover:text-inherit !hover:shadow-none"
				>
					<Link
						to="/"
						className="w-full flex flex-row items-center gap-2 cursor-pointer"
					>
						<div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
							<Logo className="size-5" />
						</div>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold text-lg">
								Agent Starter
							</span>
						</div>
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
