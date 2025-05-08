import { AppSidebar } from '@/features/agentChat/components/AppSidebar';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/common/components/shadcn-ui/sidebar';
import { ChatInputBar } from './ChatInputBar';

export const AgentChat = () => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="border-2 border-green-500 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
					</div>
				</header>
				<div className="border-2 border-blue-500 flex flex-1 flex-col gap-4 p-4 pt-0">
					<div className="fixed bottom-10">
						<ChatInputBar />
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};
