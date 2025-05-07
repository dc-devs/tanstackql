import { createFileRoute } from '@tanstack/react-router';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import {
	Sidebar,
	SidebarMenu,
	SidebarGroup,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
	SidebarTrigger,
	SidebarMenuItem,
	SidebarProvider,
	SidebarMenuButton,
	SidebarGroupLabel,
	SidebarGroupContent,
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

const AgentChatSidebar = () => {
	return (
		<Sidebar>
			<SidebarHeader />
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
			<SidebarFooter />
		</Sidebar>
	);
};

const AgentChatLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AgentChatSidebar />
			<main>
				<SidebarTrigger className="cursor-pointer" />
				{children}
			</main>
		</SidebarProvider>
	);
};
const AgentChatComponent = () => {
	return (
		<AgentChatLayout>
			<div>
				<h1>Agent Chat</h1>
			</div>
		</AgentChatLayout>
	);
};

export const Route = createFileRoute('/_authed/agent-chat')({
	component: AgentChatComponent,
});
