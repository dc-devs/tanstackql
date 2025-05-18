import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { getChatSessions } from '@/features/agentChat/server/getChatSessions';
import {
	SidebarMenu,
	SidebarGroup,
	SidebarMenuItem,
	SidebarGroupLabel,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

export const NavChats = () => {
	const { data: chats } = useQuery({
		queryKey: ['chat-sessions'],
		queryFn: getChatSessions,
	});

	return (
		<SidebarGroup className="mt-10 group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel className="text-md">Chats</SidebarGroupLabel>
			<div className="border-r-2 border-gray-200 h-full mx-2"></div>
			<div className="border-b-2 border-gray-200 w-full my-2"></div>
			<SidebarMenu>
				{chats.map((chat: any, index: number) => (
					<SidebarMenuItem key={index}>
						<SidebarMenuButton asChild>
							<Link
								to="/agent/chats/$id"
								params={{ id: chat.id }}
							>
								<span>{chat.title}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};
