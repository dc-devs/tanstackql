import { SessionResponse, User } from '@/gql/graphql';
import { Route } from '@/routes/_authed/users.$userId';

export const UserProfile = () => {
	const { authSession } = Route.useRouteContext();
	const { user } = authSession as SessionResponse;
	const { email } = user as User;

	return <div>Hello {email}!</div>;
};
