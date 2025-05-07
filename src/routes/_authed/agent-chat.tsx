import { createFileRoute } from '@tanstack/react-router';

const AgentChatComponent = () => {
	return <div>Agent Chat!!</div>;
};

export const Route = createFileRoute('/_authed/agent-chat')({
	component: AgentChatComponent,
});
