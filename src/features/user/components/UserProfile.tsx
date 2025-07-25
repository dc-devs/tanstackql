import { getRouteApi } from '@tanstack/react-router';
import { SessionResponse, User } from '@/gql/graphql';
import { MainLayout } from '@/common/components/layouts/main';

const routeApi = getRouteApi('__root__');

export const UserProfile = () => {
	const { authSession } = routeApi.useRouteContext();
	const { user } = authSession as SessionResponse;
	const { email } = user as User;

	return (
		<MainLayout>
			<div>Hello {email}!</div>
		</MainLayout>
	);
};
