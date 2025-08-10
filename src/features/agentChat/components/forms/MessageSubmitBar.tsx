import { useState, type ReactNode } from 'react';
import { useForm } from '@/common/hooks';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';
import { Textarea } from '@/common/components/shadcn-ui/textarea';

type MessageSubmitBarProps = {
	placeholder?: string;
	pending?: boolean;
	onSubmit: (
		text: string,
		helpers: {
			reset: () => void;
			setError: (message: string | null) => void;
		},
	) => void | Promise<void>;
	submitAriaLabel?: string;
	leftSlot?: ReactNode;
	autoFocus?: boolean;
};

export const MessageSubmitBar = ({
	placeholder = 'Type a message...',
	pending = false,
	onSubmit,
	submitAriaLabel = 'Send',
	leftSlot,
	autoFocus = false,
}: MessageSubmitBarProps) => {
	const [, setSubmissionError] = useState<string | null>(null);

	const form = useForm({
		defaultValues: { text: '' },
		onSubmit: async ({ value }) => {
			setSubmissionError(null);
			try {
				await onSubmit(value.text, {
					reset: form.reset,
					setError: setSubmissionError,
				});
			} catch (error) {
				console.error('MessageSubmitBar submission error:', error);
				setSubmissionError('Something went wrong. Please try again.');
			}
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
			{leftSlot}
			<form.Field name="text">
				{(field) => (
					<Textarea
						id="text-submit-bar-input"
						placeholder={placeholder}
						className="flex-1 bg-transparent border-0 shadow-none text-base placeholder:text-muted-foreground resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none focus-visible:outline-none focus-visible:ring-offset-0 min-h-0"
						autoComplete="off"
						autoFocus={autoFocus}
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						onBlur={field.handleBlur}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && !e.shiftKey) {
								e.preventDefault();
								const hasContent =
									String(field.state.value ?? '').trim()
										.length > 0;
								if (!pending && hasContent) {
									form.handleSubmit();
								}
							}
						}}
						disabled={pending}
					/>
				)}
			</form.Field>
			<form.Subscribe
				selector={(state) => [
					state.canSubmit,
					state.isSubmitting,
					state.values.text,
				]}
			>
				{([canSubmit, isSubmitting, textValue]) => {
					const hasContent =
						String(textValue ?? '').trim().length > 0;
					const disabled =
						!canSubmit || isSubmitting || pending || !hasContent;

					return (
						<Button
							type="submit"
							size="icon"
							className="cursor-pointer rounded-[50%]"
							aria-label={submitAriaLabel}
							disabled={disabled as boolean}
						>
							{pending ? (
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
