import { useState } from 'react';
import { useForm } from '@/common/hooks';
import { Paperclip, ArrowUp } from 'lucide-react';
import { useRouter } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { getRouteApi } from '@tanstack/react-router';
import { type MessageCreateInput } from '@/gql/graphql';
import { Button } from '@/common/components/shadcn-ui/button';
import { Textarea } from '@/common/components/shadcn-ui/textarea';
import { createMessageServerFn } from '@/features/agentChat/serverFns';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/common/components/shadcn-ui/tooltip';

const routeApi = getRouteApi('/_authed/agent/chats/$chatSessionId');

export const NewMessageInputBar = () => {
	const router = useRouter();
	const { chatSessionId } = routeApi.useParams();
	const [, setSubmissionError] = useState<string | null>(null);
	const createChatSessionMutation = useMutation({
		mutationFn: useServerFn(createMessageServerFn),
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

			try {
				await createChatSessionMutation.mutateAsync({
					data: messageCreateInput,
				});

				router.invalidate();
			} catch (error) {
				console.error('Error creating chat session:', error);
				setSubmissionError('Failed to create new chat session.');
			}
		},
	});

	return (
		<form
			className="flex items-center gap-2 rounded-2xl border border-input bg-background px-3 py-2 shadow-xs focus-within:ring-2 focus-within:ring-ring/50 w-full max-w-2xl mx-auto"
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
						placeholder="Ask agent anything..."
						className="
					flex-1 bg-transparent border-0 shadow-none text-base placeholder:text-muted-foreground resize-none
					focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none focus-visible:outline-none focus-visible:ring-offset-0
				"
						autoComplete="off"
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						onBlur={field.handleBlur}
					/>
				)}
			</form.Field>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="shrink-0 cursor-pointer"
						aria-label="Add Attachment"
					>
						<Paperclip className="size-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent sideOffset={8}>Add Attachment</TooltipContent>
			</Tooltip>
			{/* Submit Button */}
			<form.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}
			>
				{([canSubmit, isSubmitting]) => (
					<Button
						type="submit"
						size="icon"
						className="shrink-0 cursor-pointer"
						aria-label="Send"
						disabled={
							!canSubmit ||
							isSubmitting ||
							createChatSessionMutation.isPending
						}
					>
						<ArrowUp className="size-5" />
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
};
