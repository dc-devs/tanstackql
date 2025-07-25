import { ChatInputBar } from '@/features/agentChat/components/chat/ChatInputBar';
import { ChatMessageList } from '@/features/agentChat/components/chat/ChatMessageList';

export const ChatScreen = () => {
	return (
		<>
			<ChatMessageList />
			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<ChatInputBar />
			</div>
		</>
	);
};
