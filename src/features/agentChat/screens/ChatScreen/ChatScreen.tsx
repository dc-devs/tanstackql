import { ChatMessageList } from '@/features/agentChat/components/chat/ChatMessageList';
import { NewMessageInputBar } from '@/features/agentChat/screens/ChatScreen/components/NewMessageInputBar';

export const ChatScreen = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="mx-auto w-[780px] flex-1 overflow-y-auto">
				<ChatMessageList />
			</div>
			<div className="sticky bottom-0">
				<div className="mx-auto w-[780px]">
					<NewMessageInputBar />
				</div>
			</div>
		</div>
	);
};
