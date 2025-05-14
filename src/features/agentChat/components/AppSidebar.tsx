import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { NavUser } from '@/features/agentChat/components/NavUser';
import { NavChats } from '@/features/agentChat/components/NavChats';
import { getChatSessions } from '@/features/agentChat/server/getChatSessions';
import { SidebarHeaderLogo } from '@/features/agentChat/components/SidebarHeaderLogo';
import { CreateNewChatButton } from '@/features/agentChat/components/CreateNewChatButton';
import {
	Sidebar,
	SidebarRail,
	SidebarFooter,
	SidebarHeader,
	SidebarContent,
} from '@/common/components/shadcn-ui/sidebar';

export const AppSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	const { data } = useQuery({
		queryKey: ['chat-sessions'],
		queryFn: getChatSessions,
	});

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarHeaderLogo />
				<CreateNewChatButton />
			</SidebarHeader>
			<SidebarContent>
				<NavChats chats={data} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};
