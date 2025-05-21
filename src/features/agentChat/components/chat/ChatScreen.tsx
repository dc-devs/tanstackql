import { useRouterState } from '@tanstack/react-router';
import { ChatInputBar } from '@/features/agentChat/components/chat/ChatInputBar';
import { ChatMessageList } from '@/features/agentChat/components/chat/ChatMessageList';

export const ChatScreen = () => {
	const { location } = useRouterState();
	const isIndexRoute =
		location.pathname === '/agent/chats/' ||
		location.pathname === '/agent/chats';

	return (
		<>
			{!isIndexRoute && <ChatMessageList />}
			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<ChatInputBar />
			</div>
		</>
	);
};
