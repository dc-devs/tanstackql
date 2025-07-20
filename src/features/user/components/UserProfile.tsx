import { Route } from '@/routes/_authed';
import { SessionResponse, User } from '@/gql/graphql';
import { MainLayout } from '@/common/components/layouts/main';

export const UserProfile = () => {
	const { authSession } = Route.useRouteContext();
	const { user } = authSession as SessionResponse;
	const { email } = user as User;

	return (
		<MainLayout>
			<div>Hello {email}!</div>
		</MainLayout>
	);
};
