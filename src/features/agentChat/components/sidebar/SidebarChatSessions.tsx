import { Link } from '@tanstack/react-router';
import { getRouteApi } from '@tanstack/react-router';
import {
	SidebarMenu,
	SidebarGroup,
	SidebarMenuItem,
	SidebarGroupLabel,
	SidebarMenuButton,
	SidebarGroupContent,
} from '@/common/components/shadcn-ui/sidebar';

const routeApi = getRouteApi('/_authed/agent');

export const SidebarChatSessions = () => {
	const { chatSessions } = routeApi.useLoaderData();

	return (
		<SidebarGroup className="mt-10 group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Chat Sessions</SidebarGroupLabel>
			<div className="border-r-2 border-gray-200 h-full mx-2"></div>
			<div className="border-b-2 border-gray-200 w-full my-2"></div>
			<SidebarGroupContent>
				<SidebarMenu>
					{chatSessions?.map((chatSession) => (
						<SidebarMenuItem key={chatSession.id}>
							<SidebarMenuButton asChild>
								<Link
									to="/agent/chats/$chatSessionId"
									params={{ chatSessionId: chatSession.id }}
									preload={false}
								>
									<span>{chatSession.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
