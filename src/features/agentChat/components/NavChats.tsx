import { Link } from '@tanstack/react-router';
import {
	SidebarMenu,
	SidebarGroup,
	SidebarMenuItem,
	SidebarGroupLabel,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

export const NavChats = ({
	chats,
}: {
	chats: {
		name: string;
		url: string;
	}[];
}) => {
	return (
		<SidebarGroup className="mt-10 group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel className="text-md">Chats</SidebarGroupLabel>
			<div className="border-r-2 border-gray-200 h-full mx-2"></div>
			<div className="border-b-2 border-gray-200 w-full my-2"></div>
			<SidebarMenu>
				{chats.map((chat) => (
					<SidebarMenuItem key={chat.name}>
						<SidebarMenuButton asChild>
							<Link to={chat.url}>
								<span>{chat.name}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};
