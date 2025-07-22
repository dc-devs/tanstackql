import { SidebarHeaderLogo } from '@/features/agentChat/components/sidebar/SidebarHeaderLogo';
import { SidebarMenuItemNewChat } from '@/features/agentChat/components/sidebar/SidebarMenuItemNewChat';
import {
	SidebarUser,
	SidebarChatSessions,
} from '@/features/agentChat/components/sidebar';
import {
	Sidebar,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from '@/common/components/shadcn-ui/sidebar';

export function AgentChatSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="sidebar" collapsible="icon" {...props}>
			<SidebarHeader>
				<div className="space-y-4">
					<SidebarHeaderLogo />
					{/* <div className="border-t border-sidebar-border"></div> */}
					<SidebarMenuItemNewChat />
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarChatSessions />
			</SidebarContent>
			<SidebarFooter>
				<SidebarUser />
			</SidebarFooter>
		</Sidebar>
	);
}

// import * as React from 'react';
//
// import { SidebarChatSessions } from '@/features/agentChat/components/sidebar/SidebarChatSessions';
// import { SidebarHeaderLogo } from '@/features/agentChat/components/sidebar/SidebarHeaderLogo';
// import { SidebarNewChatButton } from '@/features/agentChat/components/sidebar/SidebarNewChatButton';
// import {
// 	Sidebar,
// 	SidebarContent,
// 	SidebarFooter,
// 	SidebarHeader,
// 	SidebarGroup,
// } from '@/common/components/shadcn-ui/sidebar';

// export const AgentChatSidebar = ({
// 	...props
// }: React.ComponentProps<typeof Sidebar>) => {
// 	return (
// 		<Sidebar>
// 			<SidebarHeader>Header</SidebarHeader>
// 			<SidebarContent>
// 				<SidebarGroup>Group</SidebarGroup>
// 			</SidebarContent>
// 			<SidebarFooter>Footer</SidebarFooter>
// 		</Sidebar>
// 	);
// };

// // <Sidebar collapsible="icon" {...props}>
// // 	<SidebarHeader>
// // 		<SidebarHeaderLogo />
// // 		<SidebarNewChatButton />
// // 	</SidebarHeader>
// // 	<SidebarContent>
// // 		<SidebarChatSessions />
// // 	</SidebarContent>
// // 	<SidebarFooter>
// // 		<SidebarUser />
// // 	</SidebarFooter>
// // </Sidebar>
