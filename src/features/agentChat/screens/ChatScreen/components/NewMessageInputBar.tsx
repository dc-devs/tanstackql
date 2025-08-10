import { useState } from 'react';
import { useForm } from '@/common/hooks';
import { ArrowUp } from 'lucide-react';
import { useServerFn } from '@tanstack/react-start';
import { type MessageCreateInput } from '@/gql/graphql';
import { Button } from '@/common/components/shadcn-ui/button';
import { getRouteApi } from '@tanstack/react-router';
import { Textarea } from '@/common/components/shadcn-ui/textarea';
import { createMessageServerFn } from '@/features/agentChat/serverFns';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

// Define the expected mutation variables type
type MutationVariables = {
	data: MessageCreateInput;
};

// Define message type for cache operations
type Message = {
	id: string;
	content: string;
	sender: string;
	type: string;
	timestamp: string;
	chatSessionId: number;
	isOptimistic?: boolean;
};

export const NewMessageInputBar = () => {
	const queryClient = useQueryClient();
	const { chatSessionId } = routeApi.useParams();
	const [, setSubmissionError] = useState<string | null>(null);

	// Call useServerFn at component top level (during render)
	const createMessageServerFnCall = useServerFn(createMessageServerFn);

	const createMessageMutation = useMutation({
		// ✅ FIXED: Use the function reference instead of calling hook inside mutationFn
		mutationFn: (variables: MutationVariables) =>
			createMessageServerFnCall(variables),
		mutationKey: ['createMessage', chatSessionId], // ✅ STANDARD: Use string

		// 🎯 OPTIMISTIC UPDATE: Show user message instantly
		onMutate: async (variables: MutationVariables) => {
			const chatSessionIdNum = Number(chatSessionId); // Convert only when needed

			// Cancel any ongoing refetches to prevent overwriting optimistic update
			await queryClient.cancelQueries({
				queryKey: ['messages', chatSessionId], // ✅ STANDARD: Use string for cache key
			});

			// Snapshot previous data for rollback
			const previousMessages = queryClient.getQueryData([
				'messages',
				chatSessionId, // ✅ STANDARD: Use string for cache key
			]);

			// Create optimistic user message
			const optimisticMessage: Message = {
				id: `temp-user-${Date.now()}`,
				content: variables.data.content || '',
				sender: 'user',
				type: 'text',
				timestamp: variables.data.timestamp || new Date().toISOString(),
				chatSessionId: chatSessionIdNum, // Use number for internal data structure
				isOptimistic: true,
			};

			// ⚡ INSTANT UPDATE: Add optimistic message to cache
			queryClient.setQueryData(
				['messages', chatSessionId], // ✅ STANDARD: Use string for cache key
				(old: Message[]) => [...(old || []), optimisticMessage],
			);

			// Return context for error rollback
			return { previousMessages, optimisticMessage };
		},

		// ✅ SUCCESS: Replace optimistic with real data
		onSuccess: (serverResponse, variables, context) => {
			// Replace optimistic message with real server message
			queryClient.setQueryData(
				['messages', chatSessionId], // ✅ STANDARD: Use string for cache key
				(old: Message[]) => {
					const withoutOptimistic = (old || []).filter(
						(msg) => msg.id !== context?.optimisticMessage.id,
					);
					return [
						...withoutOptimistic,
						serverResponse, // Real message from server
					];
				},
			);

			// ✅ NO INVALIDATION: Let background polling in ChatMessageList handle AI responses

			// Clear any errors
			setSubmissionError(null);
		},

		// ❌ ERROR: Rollback optimistic update
		onError: (error, variables, context) => {
			const chatSessionIdNum = Number(chatSessionId);

			// Rollback to previous state
			if (context?.previousMessages) {
				queryClient.setQueryData(
					['messages', chatSessionIdNum],
					context.previousMessages,
				);
			}

			// Show error to user
			console.error('Error creating message:', error);
			setSubmissionError('Failed to send message. Please try again.');
		},

		// 🔄 Retry failed mutations automatically
		retry: 1,
		retryDelay: 1000,
	});

	const form = useForm({
		defaultValues: {
			content: '',
		},
		onSubmit: async ({ value: data }) => {
			// Clear any previous errors
			setSubmissionError(null);

			// Transform form data to match MessageCreateInput
			const messageCreateInput: MessageCreateInput = {
				content: data.content.trim(),
				sender: 'user',
				type: 'text',
				timestamp: new Date().toISOString(),
				chatSession: {
					connect: {
						id: Number(chatSessionId),
					},
				},
			};

			// 🚀 FIRE MUTATION: This triggers optimistic update → server call → AI polling
			createMessageMutation.mutate({
				data: messageCreateInput,
			});

			// ⚡ INSTANT UX: Clear form immediately (before server response)
			form.reset();
		},
	});

	return (
		<form
			className="flex items-center gap-2 rounded-[28px] border border-input bg-background px-3 py-2 shadow-xs focus-within:ring-2 focus-within:ring-ring/50 w-full"
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			{/* Message Field */}
			<form.Field name="content">
				{(field) => (
					<Textarea
						id="message-input"
						placeholder="Ask anything"
						className="flex-1 bg-transparent border-0 shadow-none text-base placeholder:text-muted-foreground resize-none
					focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none focus-visible:outline-none focus-visible:ring-offset-0 min-h-0"
						autoComplete="off"
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						onBlur={field.handleBlur}
						disabled={createMessageMutation.isPending}
					/>
				)}
			</form.Field>
			{/* Submit Button */}
			<form.Subscribe
				selector={(state) => [
					state.canSubmit,
					state.isSubmitting,
					!!state.values.content?.trim(),
				]}
			>
				{([canSubmit, isSubmitting, hasContent]) => {
					return (
						<Button
							type="submit"
							size="icon"
							className="cursor-pointer rounded-[50%]"
							aria-label="Send"
							disabled={
								!canSubmit ||
								isSubmitting ||
								createMessageMutation.isPending ||
								!hasContent
							}
						>
							{createMessageMutation.isPending ? (
								<div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
							) : (
								<ArrowUp className="size-5" />
							)}
						</Button>
					);
				}}
			</form.Subscribe>
		</form>
	);
};
