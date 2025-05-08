import { AppSidebar } from '@/features/agentChat/components/AppSidebar';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/common/components/shadcn-ui/sidebar';
import { ChatInputBar } from './ChatInputBar';
import { useRef, useEffect } from 'react';

// Simple chat message component
const ChatMessage = ({
	message,
	isUser,
}: {
	message: string;
	isUser?: boolean;
}) => (
	<div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
		<div
			className={`rounded-lg px-4 py-2 max-w-[70%] text-sm shadow ${
				isUser
					? 'bg-blue-500 text-white'
					: 'bg-gray-100 text-gray-900 border border-gray-200'
			}`}
		>
			{message}
		</div>
	</div>
);

// Message list with auto-scroll to bottom
const ChatMessageList = ({
	messages,
}: {
	messages: { message: string; isUser?: boolean }[];
}) => {
	const bottomRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	return (
		<div className="flex-1 overflow-y-auto pr-2">
			{messages.map((msg, i) => (
				<ChatMessage key={i} {...msg} />
			))}
			<div ref={bottomRef} />
		</div>
	);
};

export const AgentChat = () => {
	// Mock messages for demo
	const messages = [
		{ message: 'Hello! How can I help you today?', isUser: false },
		{ message: 'What is the weather like in New York?', isUser: true },
		{ message: "It's sunny and 75°F in New York today.", isUser: false },
	];

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="border-2 border-green-500 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
					</div>
				</header>
				<div className="border-2 border-blue-500 flex flex-1 flex-col gap-4 p-4 pt-0 relative min-h-0">
					{/* Message list fills available space above input */}
					<ChatMessageList messages={messages} />
					{/* Input bar fixed to bottom of chat area */}
					<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2">
						<ChatInputBar />
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};
