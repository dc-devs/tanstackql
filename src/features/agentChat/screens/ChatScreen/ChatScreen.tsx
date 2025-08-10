import { ChatMessageList } from '@/features/agentChat/components/chat/ChatMessageList';
import { NewMessageInputBar } from '@/features/agentChat/screens/ChatScreen/components/NewMessageInputBar';

export const ChatScreen = () => {
	return (
		<div className="flex flex-col h-full border-2 border-red-500">
			<div className="mx-auto w-[780px] flex-1 overflow-y-auto border-2 border-green-400">
				<ChatMessageList />
			</div>
			<div className="sticky bottom-0 border-2 border-red-500">
				<div className="mx-auto w-[780px]">
					<NewMessageInputBar />
				</div>
			</div>
		</div>
	);
};
