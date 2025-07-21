import { Route } from '@/routes/_authed/agent/chats.$chatSessionId';
import { ChatMessage } from '@/features/agentChat/components/chat/ChatMessage';

export const ChatMessageList = () => {
	const { messages } = Route.useLoaderData();

	console.log('messages', messages);

	return (
		<div className="flex-1 overflow-y-auto pr-2">
			{messages?.map((message, i) => {
				const { content, sender } = message;
				const isUser = sender === 'user';

				return (
					<ChatMessage
						key={i}
						content={content ?? ''}
						isUser={isUser}
					/>
				);
			})}
		</div>
	);
};
