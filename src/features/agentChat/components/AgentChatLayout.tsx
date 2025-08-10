import { ReactNode } from 'react';
import { AgentChatSidebar } from '@/features/agentChat/components/sidebar/AgentChatSidebar';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/common/components/shadcn-ui/sidebar';

export const AgentChatLayout = ({ children }: { children: ReactNode }) => {
	return (
		<SidebarProvider defaultOpen={true}>
			<AgentChatSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1 cursor-pointer" />
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0 relative min-h-0">
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};
