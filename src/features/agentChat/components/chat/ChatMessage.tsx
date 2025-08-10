// No avatars in the UI per latest design

export const ChatMessage = ({
	content,
	isUser,
}: {
	content: string;
	isUser?: boolean;
}) => {
	if (isUser) {
		return (
			<div className="flex items-start justify-end">
				<div className="max-w-[75%] rounded-[18px] px-4 py-1.5  bg-[#e9e9e980] leading-7 text-[#0d0d0d]">
					<div className="whitespace-pre-wrap">{content}</div>
				</div>
			</div>
		);
	}

	// Assistant: full-width block within container, no avatar
	return (
		<div className="bg-white">
			<div className="py-6">
				<div className="min-w-0">
					<div className="whitespace-pre-wrap text-[15px] leading-7 text-gray-900">
						{content}
					</div>
				</div>
			</div>
		</div>
	);
};
