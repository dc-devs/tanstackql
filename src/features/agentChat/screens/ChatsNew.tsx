import { ChatInputBar } from '@/features/agentChat/components/chat/ChatInputBar';

export const ChatsNew = () => {
	return (
		<>
			<div className="h-full flex flex-col items-center justify-center relative">
				<div>
					<p className="text-5xl font-bold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004efc] to-[#82ffff]">
							New Chat
						</span>
					</p>
				</div>
			</div>
			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<ChatInputBar />
			</div>
		</>
	);
};
