import { Logo } from '@/common/icons/Logo';
import { Link } from '@tanstack/react-router';
import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

const SidebarIconLink = ({ text }: { text: string }) => {
	return (
		<SidebarMenuButton
			asChild
			className="transition-all duration-200 ease-linear"
		>
			<div className="flex items-center justify-center p-0!">
				<Link
					to="/"
					className="flex flex-row items-center justify-center w-full h-full cursor-pointer"
				>
					<div className="flex items-center justify-center aspect-square size-8 rounded-lg">
						<Logo className="size-6" />
					</div>
					<div className="group-data-[collapsible=icon]:opacity-0">
						<div className="grid flex-1 text-left text-lg leading-tight">
							<p className="truncate font-semibold">{text}</p>
						</div>
					</div>
				</Link>
			</div>
		</SidebarMenuButton>
	);
};

export const SidebarHeaderLogo = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<div className="mt-5">
					<SidebarIconLink text="Agent Starter" />
				</div>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

{
	/* <SidebarMenuButton className="[&>svg]:size-6 group-data-[collapsible=icon]:[&>svg]:ml-1">
	<div className="flex aspect-square size-8 items-center justify-center rounded-lg">
		<Logo className="size-4" />
	</div>
	<div className="grid flex-1 text-left text-sm leading-tight">
		<span className="truncate font-semibold">Agent Starter</span>
	</div>
	<Link
		to="/"
		className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:px-2"
	>
		<div className="flex aspect-square size-8 items-center justify-center rounded-lg">
			<Logo className="size-5" />
		</div>
		<span className="truncate font-semibold text-lg group-data-[collapsible=icon]:hidden">
			Agent Starter
		</span>
	</Link>
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
</SidebarMenuButton>; */
}
