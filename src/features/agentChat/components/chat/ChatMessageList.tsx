import { FindOneMessageQuery } from '@/gql/graphql';
import { getRouteApi } from '@tanstack/react-router';
import { useQuery, queryOptions } from '@tanstack/react-query';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';
import { ChatMessage } from '@/features/agentChat/components/chat/ChatMessage';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const ChatMessageList = () => {
	const { chatSessionId } = routeApi.useParams();

	const { data: messages } = useQuery(
		queryOptions({
			queryKey: ['messages', chatSessionId],
			queryFn: () =>
				findAllMessagesServerFn({
					data: {
						where: {
							chatSessionId: { equals: Number(chatSessionId) }, // Convert only for API call
						},
					},
				}),
			// Keep in cache for 5 minutes after component unmounts
			gcTime: 5 * 60 * 1000,
		}),
	);

	const allMessages: FindOneMessageQuery['findOneMessage'][] = (
		messages || []
	).sort(
		(a, b) =>
			new Date(a?.timestamp).getTime() - new Date(b?.timestamp).getTime(),
	);

	return (
		<div className="flex-1 overflow-y-auto pr-2">
			{allMessages?.map((message) => {
				const id = message!.id;
				const content = message!.content;
				const isUser = message!.sender === 'user';

				return (
					<ChatMessage
						key={id}
						content={content ?? ''}
						isUser={isUser}
					/>
				);
			})}
		</div>
	);
};
