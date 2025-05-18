import { useQuery } from '@tanstack/react-query';
import { getMessages } from '@/features/agentChat/server/getMessages';
import { ChatInputBar } from '@/features/agentChat/components/ChatInputBar';
import { ChatMessageList } from '@/features/agentChat/components/NewMessageList';

export const Chat = () => {
	const { data: messages } = useQuery({
		queryKey: ['messages'],
		queryFn: getMessages,
	});

	return (
		<>
			<ChatMessageList messages={messages} />

			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<ChatInputBar />
			</div>
		</>
	);
};
