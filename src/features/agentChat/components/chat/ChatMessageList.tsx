import { FindOneMessageQuery } from '@/gql/graphql';
import { getRouteApi } from '@tanstack/react-router';
import { useQuery, queryOptions } from '@tanstack/react-query';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';
import { ChatMessage } from '@/features/agentChat/components/chat/ChatMessage';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const ChatMessageList = () => {
	const { chatSessionId } = routeApi.useParams();
	const loaderData = routeApi.useLoaderData();

	type ChatMessage = NonNullable<FindOneMessageQuery['findOneMessage']>;

	const { data: messages } = useQuery<ChatMessage[]>(
		queryOptions<ChatMessage[]>({
			queryKey: ['messages', chatSessionId],
			queryFn: () =>
				findAllMessagesServerFn({
					data: {
						where: {
							chatSessionId: { equals: Number(chatSessionId) }, // Convert only for API call
						},
					},
				}) as Promise<ChatMessage[]>,
			// Keep in cache for 5 minutes after component unmounts
			gcTime: 5 * 60 * 1000,
			staleTime: 0,
			refetchOnWindowFocus: true,
			refetchOnReconnect: true,
			refetchIntervalInBackground: true,
			refetchInterval: (query): number | false => {
				const messages =
					(query.state.data as ChatMessage[] | undefined) ?? [];
				const last = messages[messages.length - 1];
				const pending = !!last && last.sender === 'user';
				return pending ? 1000 : false; // poll every 1s only while pending
			},
		}),
	);

	const allMessages: ChatMessage[] = [...(messages ?? [])].sort(
		(a: ChatMessage, b: ChatMessage) =>
			new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
	);
	const last = allMessages[allMessages.length - 1];
	const pendingFromQuery = !!last && last.sender === 'user';
	const pending = messages
		? pendingFromQuery
		: !!loaderData?.lastMessageIsUserMessage;

	return (
		<>
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
			{pending ? (
				<div className="bg-white">
					<div className="py-6">
						<div
							className="inline-flex items-center gap-2"
							aria-live="polite"
							aria-busy="true"
						>
							<span className="relative flex h-2 w-8 items-center">
								<span className="mx-0.5 h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
								<span className="mx-0.5 h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
								<span className="mx-0.5 h-2 w-2 rounded-full bg-gray-400 animate-bounce" />
							</span>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
