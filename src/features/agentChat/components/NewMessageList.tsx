import { useRef, useEffect } from 'react';
import { ChatMessage } from '@/features/agentChat/components/ChatMessage';
// {
//     id: '1',
//     type: 'text',
//     sender: 'user',
//     content: 'Can you help me build a React Todo App? I want to learn React basics and create something practical.',
//     payload: '{"content":"Can you help me build a React Todo App? I want to learn React basics and create something practical."}',
//     timestamp: '2025-05-14T15:10:51.125Z',
//     chatSessionId: 1
//   },
export const ChatMessageList = ({
	messages,
}: {
	messages: { message: string; isUser?: boolean }[];
}) => {
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	return (
		<div className="flex-1 overflow-y-auto pr-2">
			{messages.map((message, i) => {
				const { content, sender } = message;
				const isUser = sender === 'user';
				return (
					<ChatMessage key={i} content={content} isUser={isUser} />
				);
			})}
			<div ref={bottomRef} />
		</div>
	);
};
