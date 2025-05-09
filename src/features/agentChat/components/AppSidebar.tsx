import * as React from 'react';
import { NavUser } from '@/features/agentChat/components/NavUser';
import { SidebarHeaderLogo } from '@/features/agentChat/components/SidebarHeaderLogo';
import { CreateNewChatButton } from '@/features/agentChat/components/CreateNewChatButton';
// import { DatabaseZap } from 'lucide-react';
// import { Button } from '@/common/components/shadcn-ui/button';
// import { NavMain } from '@/features/agentChat/components/NavMain';
// import { NavProjects } from '@/features/agentChat/components/NavProjects';
// import { TeamSwitcher } from '@/features/agentChat/components/unused/TeamSwitcher';
// import { LogoLink } from '@/common/components/layouts/main/common/LogoLink';
// import {
// 	Bot,
// 	Map,
// 	Frame,
// 	BookOpen,
// 	PieChart,
// 	Settings2,
// 	SquareTerminal,
// } from 'lucide-react';
import {
	Sidebar,
	SidebarRail,
	SidebarFooter,
	SidebarHeader,
	SidebarContent,
} from '@/common/components/shadcn-ui/sidebar';

// This is sample data.
// const data = {
// 	navMain: [
// 		{
// 			title: 'Playground',
// 			url: '#',
// 			icon: SquareTerminal,
// 			isActive: true,
// 			items: [
// 				{
// 					title: 'History',
// 					url: '#',
// 				},
// 				{
// 					title: 'Starred',
// 					url: '#',
// 				},
// 				{
// 					title: 'Settings',
// 					url: '#',
// 				},
// 			],
// 		},
// 		{
// 			title: 'Models',
// 			url: '#',
// 			icon: Bot,
// 			items: [
// 				{
// 					title: 'Genesis',
// 					url: '#',
// 				},
// 				{
// 					title: 'Explorer',
// 					url: '#',
// 				},
// 				{
// 					title: 'Quantum',
// 					url: '#',
// 				},
// 			],
// 		},
// 		{
// 			title: 'Documentation',
// 			url: '#',
// 			icon: BookOpen,
// 			items: [
// 				{
// 					title: 'Introduction',
// 					url: '#',
// 				},
// 				{
// 					title: 'Get Started',
// 					url: '#',
// 				},
// 				{
// 					title: 'Tutorials',
// 					url: '#',
// 				},
// 				{
// 					title: 'Changelog',
// 					url: '#',
// 				},
// 			],
// 		},
// 		{
// 			title: 'Settings',
// 			url: '#',
// 			icon: Settings2,
// 			items: [
// 				{
// 					title: 'General',
// 					url: '#',
// 				},
// 				{
// 					title: 'Team',
// 					url: '#',
// 				},
// 				{
// 					title: 'Billing',
// 					url: '#',
// 				},
// 				{
// 					title: 'Limits',
// 					url: '#',
// 				},
// 			],
// 		},
// 	],
// 	projects: [
// 		{
// 			name: 'Design Engineering',
// 			url: '#',
// 			icon: Frame,
// 		},
// 		{
// 			name: 'Sales & Marketing',
// 			url: '#',
// 			icon: PieChart,
// 		},
// 		{
// 			name: 'Travel',
// 			url: '#',
// 			icon: Map,
// 		},
// 	],
// };

export const AppSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarHeaderLogo />
				<CreateNewChatButton />
			</SidebarHeader>
			<SidebarContent>
				{/* <NavMain items={data.navMain} /> */}
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};
