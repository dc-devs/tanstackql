import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { findAllChatSessions } from '@/serverFns/chatSessions/fns/findAllChatSessions';
import {
	SidebarMenu,
	SidebarGroup,
	SidebarMenuItem,
	SidebarGroupLabel,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

// TODO: FIX AUTH
export const SidebarChatSessions = () => {
	const userId = 1;

	const { data: chats } = useQuery({
		queryKey: ['chat-sessions', `userId-${userId}`],
		queryFn: () =>
			findAllChatSessions({
				data: {
					where: {
						userId: {
							equals: userId,
						},
					},
				},
			}),
	});

	return (
		<SidebarGroup className="mt-10 group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel className="text-md">Chats</SidebarGroupLabel>
			<div className="border-r-2 border-gray-200 h-full mx-2"></div>
			<div className="border-b-2 border-gray-200 w-full my-2"></div>
			<SidebarMenu>
				{chats?.map((chat, index) => (
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
