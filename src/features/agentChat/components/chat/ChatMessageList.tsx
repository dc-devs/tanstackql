import { useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
// import { Route as ChatRoute } from '@/routes/_authed/agent/chats.$id';
import { findAllMessages } from '@/features/agentChat/serverFns/findAllMessages';
import { ChatMessage } from '@/features/agentChat/components/chat/ChatMessage';

export const ChatMessageList = () => {
	const bottomRef = useRef<HTMLDivElement>(null);
	const { id } = useParams({ strict: false });
	const chatSessionId = Number(id);
	const { data: messages } = useQuery({
		queryKey: ['messages', `chatSessionId-${chatSessionId}`],
		queryFn: () =>
			findAllMessages({
				data: {
					where: { chatSessionId: { equals: chatSessionId } },
				},
			}) || [],
	});

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

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
			<div ref={bottomRef} />
		</div>
	);
};
