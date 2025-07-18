export const ChatMessage = ({
	content,
	isUser,
}: {
	content: string;
	isUser?: boolean;
}) => (
	<div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
		<div
			className={`rounded-lg px-4 py-2 max-w-[70%] text-sm shadow ${
				isUser
					? 'bg-blue-500 text-white'
					: 'bg-gray-100 text-gray-900 border border-gray-200'
			}`}
		>
			{content}
		</div>
	</div>
);
