import { Route } from '@/routes/_authed/agent/route';
import { Link } from '@tanstack/react-router';
import {
	SidebarMenu,
	SidebarGroup,
	SidebarMenuItem,
	SidebarGroupLabel,
	SidebarMenuButton,
} from '@/common/components/shadcn-ui/sidebar';

export const SidebarChatSessions = () => {
	const { chatSessions } = Route.useLoaderData();

	return (
		<SidebarGroup className="mt-10 group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel className="text-md">Chats</SidebarGroupLabel>
			<div className="border-r-2 border-gray-200 h-full mx-2"></div>
			<div className="border-b-2 border-gray-200 w-full my-2"></div>
			<SidebarMenu>
				{chatSessions?.map((chatSession, index) => (
					<SidebarMenuItem key={index}>
						<SidebarMenuButton asChild>
							<Link
								to="/agent/chats/$chatSessionId"
								params={{ chatSessionId: chatSession.id }}
							>
								<span>{chatSession.title}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};
