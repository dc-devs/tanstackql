import { getRouteApi } from '@tanstack/react-router';
import { ChatMessage } from '@/features/agentChat/components/chat/ChatMessage';
import { findAllMessagesServerFn } from '@/features/agentChat/serverFns';
import { type MessageCreateInput } from '@/gql/graphql';
import {
	useQuery,
	queryOptions,
	useMutationState,
} from '@tanstack/react-query';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

// Define optimistic message type
type OptimisticMessage = {
	id: string;
	content: string;
	sender: string;
	type: string;
	timestamp: string;
	chatSessionId: number;
	isOptimistic: boolean;
};

// Define server message type (from your GraphQL)
type ServerMessage = {
	__typename?: 'Message' | undefined;
	id: string;
	type: string;
	sender: string;
	content?: string | null | undefined;
	payload?: unknown;
	timestamp: string;
	chatSessionId: number;
};

export const ChatMessageList = () => {
	const { chatSessionId } = routeApi.useParams();

	const { data: messages } = useQuery(
		queryOptions({
			queryKey: ['messages', chatSessionId], // ✅ STANDARD: Use string (from URL params)
			queryFn: () =>
				findAllMessagesServerFn({
					data: {
						where: {
							chatSessionId: { equals: Number(chatSessionId) }, // Convert only for API call
						},
					},
				}),
			// Real-time polling for AI responses
			// refetchInterval: 3000, // Check every 3 seconds
			// Refetch when user comes back to tab
			// refetchOnWindowFocus: true,
			// Consider data fresh for 30 seconds
			// staleTime: 30000,
			// Keep in cache for 5 minutes after component unmounts
			gcTime: 5 * 60 * 1000,
		}),
	);

	// 📝 Get optimistic user messages from pending mutations
	const pendingMessages = useMutationState({
		filters: {
			mutationKey: ['createMessage', chatSessionId], // ✅ STANDARD: Use string
			status: 'pending',
		},
		select: (mutation) => {
			// Type guard for mutation variables
			const variables = mutation.state.variables as
				| { data: MessageCreateInput }
				| undefined;
			if (!variables?.data) return null;

			return {
				id: `optimistic-${Date.now()}-${Math.random()}`,
				content: variables.data.content || '',
				sender: 'user',
				type: 'text',
				timestamp: variables.data.timestamp || new Date().toISOString(),
				chatSessionId: Number(chatSessionId),
				isOptimistic: true,
			} as OptimisticMessage;
		},
	}).filter((msg): msg is OptimisticMessage => msg !== null);

	// Merge server messages + optimistic messages
	const allMessages: (ServerMessage | OptimisticMessage)[] = [
		...(messages || []),
		...pendingMessages,
	].sort(
		(a, b) =>
			new Date(a?.timestamp).getTime() - new Date(b?.timestamp).getTime(),
	);

	return (
		<div className="flex-1 overflow-y-auto pr-2">
			{allMessages?.map((message) => {
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
