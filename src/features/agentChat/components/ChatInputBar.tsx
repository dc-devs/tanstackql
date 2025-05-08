import { Input } from '@/common/components/shadcn-ui/input';
import { Button } from '@/common/components/shadcn-ui/button';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/common/components/shadcn-ui/tooltip';
import { Paperclip, ArrowUp } from 'lucide-react';

export const ChatInputBar = () => {
	return (
		<form className="flex items-center gap-2 rounded-2xl border border-input bg-background px-3 py-2 shadow-xs focus-within:ring-2 focus-within:ring-ring/50 w-full max-w-2xl mx-auto">
			<Input
				type="text"
				placeholder="Ask follow-up"
				className="flex-1 bg-transparent border-0 shadow-none focus:ring-0 focus:border-0 text-base placeholder:text-muted-foreground"
				autoComplete="off"
			/>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="shrink-0"
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
				className="shrink-0"
				aria-label="Send"
			>
				<ArrowUp className="size-5" />
			</Button>
		</form>
	);
};
