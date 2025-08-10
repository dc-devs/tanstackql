import { NewChatSessionInputBar } from '@/features/agentChat/screens/ChatsNewScreen/components/NewChatSessionInputBar';

export const ChatsNewScreen = () => {
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
				<div className="mt-10 mx-auto">
					<div className="mx-auto w-[780px]">
						<NewChatSessionInputBar />
					</div>
				</div>
			</div>
		</>
	);
};
