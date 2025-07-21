import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import { SidebarUser } from '@/features/agentChat/components/sidebar/SidebarUser';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarFooter,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/common/components/shadcn-ui/sidebar';

// Menu items.
const items = [
	{
		title: 'Home',
		url: '#',
		icon: Home,
	},
	{
		title: 'Inbox',
		url: '#',
		icon: Inbox,
	},
	{
		title: 'Calendar',
		url: '#',
		icon: Calendar,
	},
	{
		title: 'Search',
		url: '#',
		icon: Search,
	},
	{
		title: 'Settings',
		url: '#',
		icon: Settings,
	},
];

export function AgentChatSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="sidebar" collapsible="icon" {...props}>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
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
