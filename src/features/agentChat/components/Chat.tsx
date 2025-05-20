import { ChatInputBar } from '@/features/agentChat/components/ChatInputBar';
import { ChatMessageList } from '@/features/agentChat/components/ChatMessageList';

export const Chat = () => {
	return (
		<>
			<ChatMessageList />
			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<ChatInputBar />
			</div>
		</>
	);
};
