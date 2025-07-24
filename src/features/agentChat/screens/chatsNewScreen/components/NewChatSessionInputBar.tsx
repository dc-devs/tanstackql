import { useState } from 'react';
import { Route } from '@/routes/__root';
import { useForm } from '@/common/hooks';
import { Paperclip, ArrowUp } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { useNavigate } from '@tanstack/react-router';
import { type ChatSessionCreateInput } from '@/gql/graphql';
import { Button } from '@/common/components/shadcn-ui/button';
import { Textarea } from '@/common/components/shadcn-ui/textarea';
import { createChatSessionServerFn } from '@/features/agentChat/serverFns';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/common/components/shadcn-ui/tooltip';

export const NewChatSessionInputBar = () => {
	const navigate = useNavigate();
	const { authSession } = Route.useRouteContext();
	const userId = Number(authSession!.user!.id);
	const [, setSubmissionError] = useState<string | null>(null);
	const createChatSessionMutation = useMutation({
		mutationFn: useServerFn(createChatSessionServerFn),
	});

	const form = useForm({
		defaultValues: {
			message: '',
		},
		onSubmit: async ({ value: data }) => {
			// Clear any previous errors
			setSubmissionError(null);

			// Transform form data to match ChatSessionCreateInput
			const chatSessionCreateInput: ChatSessionCreateInput = {
				title: `Chat Session ${new Date().toISOString()}`,
				user: {
					connect: {
						id: userId,
					},
				},
				...(data.message?.trim() && {
					messages: {
						create: [
							{
								content: data.message,
								sender: 'user',
								type: 'text',
								timestamp: new Date().toISOString(),
							},
						],
					},
				}),
			};

			console.log('chatSessionCreateInput', chatSessionCreateInput);

			try {
				const chatSession = await createChatSessionMutation.mutateAsync(
					{
						data: chatSessionCreateInput,
					},
				);
				const chatSessionId = chatSession?.id;

				if (chatSessionId) {
					navigate({
						to: '/agent/chats/$chatSessionId',
						params: { chatSessionId },
					});
				}

				return;
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
			<form.Field name="message">
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
