import { useState } from 'react';
import { Paperclip, ArrowUp } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';
import { Textarea } from '@/common/components/shadcn-ui/textarea';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/common/components/shadcn-ui/tooltip';

export const ChatInputBar = () => {
	const [value, setValue] = useState('');

	return (
		<form className="flex items-center gap-2 rounded-2xl border border-input bg-background px-3 py-2 shadow-xs focus-within:ring-2 focus-within:ring-ring/50 w-full max-w-2xl mx-auto">
			<Textarea
				placeholder="Ask agent anything..."
				className="
					flex-1 bg-transparent border-0 shadow-none text-base placeholder:text-muted-foreground resize-none
					focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none focus-visible:outline-none focus-visible:ring-offset-0
				"
				autoComplete="off"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
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
			<Button
				type="submit"
				size="icon"
				className="shrink-0 cursor-pointer"
				aria-label="Send"
			>
				<ArrowUp className="size-5" />
			</Button>
		</form>
	);
};
