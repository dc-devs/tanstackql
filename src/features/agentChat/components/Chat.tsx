import { useQuery } from '@tanstack/react-query';
import { getMessages } from '@/features/agentChat/serverFns/getMessages';
import { ChatInputBar } from '@/features/agentChat/components/ChatInputBar';
import { ChatMessageList } from '@/features/agentChat/components/NewMessageList';
import { Route as ChatRoute } from '@/routes/_authed/agent/chats.$id';

export const Chat = () => {
	const { id } = ChatRoute.useParams();
	const chatSessionId = Number(id);

	const { data: rawMessages } = useQuery({
		queryKey: ['messages', `chatSessionId-${chatSessionId}`],
		queryFn: () =>
			getMessages({
				data: {
					where: { chatSessionId: { equals: chatSessionId } },
				},
			}),
	});

	// Transform messages to match ChatMessageList's expected format
	const messages =
		rawMessages?.map((msg) => ({
			content: msg.content || '',
			sender: msg.sender,
		})) || [];
	console.log('messages', messages);

	return (
		<>
			<ChatMessageList messages={messages} />

			<div className="absolute left-0 bottom-7 w-full bg-white pb-2 pt-2 px-3">
				<ChatInputBar />
			</div>
		</>
	);
};
