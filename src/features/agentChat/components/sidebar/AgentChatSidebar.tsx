import * as React from 'react';
import { SidebarUser } from '@/features/agentChat/components/sidebar/SidebarUser';
import { SidebarChatSessions } from '@/features/agentChat/components/sidebar/SidebarChatSessions';
import { SidebarHeaderLogo } from '@/features/agentChat/components/sidebar/SidebarHeaderLogo';
import { SidebarNewChatButton } from '@/features/agentChat/components/sidebar/SidebarNewChatButton';
import {
	Sidebar,
	SidebarRail,
	SidebarFooter,
	SidebarHeader,
	SidebarContent,
} from '@/common/components/shadcn-ui/sidebar';

export const AgentChatSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarHeaderLogo />
				<SidebarNewChatButton />
			</SidebarHeader>
			<SidebarContent>
				<SidebarChatSessions />
			</SidebarContent>
			<SidebarFooter>
				<SidebarUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};
