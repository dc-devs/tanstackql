import { useRef, useEffect } from 'react';
import type { Message } from '@/gql/graphql';
import { ChatMessage } from '@/features/agentChat/components/ChatMessage';

export const ChatMessageList = ({ messages }: { messages: Message[] }) => {
	const bottomRef = useRef<HTMLDivElement>(null);

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
