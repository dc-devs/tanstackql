import { getRouteApi } from '@tanstack/react-router';
import { ChatMessage } from '@/features/agentChat/components/chat/ChatMessage';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const ChatMessageList = () => {
	const { messages } = routeApi.useLoaderData();
	console.log('[ChatMessageList]', messages);

	return (
		<div className="flex-1 overflow-y-auto pr-2">
			{messages?.map((message) => {
				const { content, sender } = message;
				const isUser = sender === 'user';

				return (
					<ChatMessage
						key={message.id}
						content={content ?? ''}
						isUser={isUser}
					/>
				);
			})}
		</div>
	);
};
