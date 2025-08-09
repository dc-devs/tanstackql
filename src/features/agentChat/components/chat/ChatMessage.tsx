// No avatars in the UI per latest design

export const ChatMessage = ({
	content,
	isUser,
}: {
	content: string;
	isUser?: boolean;
}) => {
	// Pure white background for chat area
	if (isUser) {
		// Right-aligned gray bubble for user
		return (
			<div className="bg-white">
				<div className="mx-auto max-w-3xl px-4">
					<div className="flex items-start justify-end py-6">
						<div className="max-w-[75%] rounded-2xl border border-gray-200 bg-gray-100 px-4 py-2 text-[15px] leading-7 text-gray-900">
							<div className="whitespace-pre-wrap">{content}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Assistant: full-width block within container, no avatar
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-3xl px-4">
				<div className="py-6">
					<div className="min-w-0">
						<div className="whitespace-pre-wrap text-[15px] leading-7 text-gray-900">
							{content}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
