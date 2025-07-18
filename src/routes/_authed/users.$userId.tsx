import { UserProfile } from '@/features/user/components';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/users/$userId')({
	component: UserProfile,
});
