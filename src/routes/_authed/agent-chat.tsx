import { createFileRoute } from '@tanstack/react-router';
import { AgentChat } from '@/features/agentChat/components/AgentChat';

const AgentChatComponent = () => {
	return <AgentChat />;
};

export const Route = createFileRoute('/_authed/agent-chat')({
	component: AgentChatComponent,
});
