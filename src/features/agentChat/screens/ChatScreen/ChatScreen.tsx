import { ChatMessageList } from '@/features/agentChat/components/chat/ChatMessageList';
import { NewMessageInputBar } from '@/features/agentChat/screens/ChatScreen/components/NewMessageInputBar';

export const ChatScreen = () => {
	return (
		<>
			<ChatMessageList />
			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<NewMessageInputBar />
			</div>
		</>
	);
};
