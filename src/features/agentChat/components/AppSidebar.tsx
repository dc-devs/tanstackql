import * as React from 'react';
import { NavUser } from '@/features/agentChat/components/NavUser';
import { NavChats } from '@/features/agentChat/components/NavChats';
import { SidebarHeaderLogo } from '@/features/agentChat/components/SidebarHeaderLogo';
import { CreateNewChatButton } from '@/features/agentChat/components/CreateNewChatButton';
import {
	Sidebar,
	SidebarRail,
	SidebarFooter,
	SidebarHeader,
	SidebarContent,
} from '@/common/components/shadcn-ui/sidebar';
import { useQuery } from '@tanstack/react-query';
import { getChatSessionsQuery } from '@/features/agentChat/queries/getChatSessionsQuery';

// Define the type for a chat session based on the GraphQL query
interface ChatSession {
	id: string;
	title: string;
	userId: string;
	createdAt: string;
	updatedAt: string;
}

export const AppSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	const { data, isPending, isError } = useQuery(getChatSessionsQuery);

	let chats: { name: string; url: string }[] = [];
	if (data) {
		chats = (data as ChatSession[]).map((chat) => ({
			name: chat.title || 'Untitled',
			url: `/chat/${chat.id}`,
		}));
	}

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarHeaderLogo />
				<CreateNewChatButton />
			</SidebarHeader>
			<SidebarContent>
				{isPending ? (
					<div className="p-4 text-muted-foreground">
						Loading chats...
					</div>
				) : isError ? (
					<div className="p-4 text-destructive">
						Failed to load chats
					</div>
				) : (
					<NavChats chats={chats} />
				)}
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};
