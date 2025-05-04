import { useNavigate } from '@tanstack/react-router';
import { useAuth, useSignOut } from '~/features/auth/hooks';
import type { AuthContextType } from '~/features/auth/interfaces';
import { Avatar, AvatarFallback } from '~/common/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '~/common/components/ui/dropdown-menu';

export const UserAvatarMenu = () => {
	const navigate = useNavigate();
	const signOutMutation = useSignOut();
	const auth = useAuth() as AuthContextType;
	const user = auth ? auth.user : null;
	const fetchCurrentUser = auth ? auth.fetchCurrentUser : null;

	const handleLogout = async () => {
		if (user?.id) {
			await signOutMutation.mutateAsync({ userId: user.id });

			// Refetch the user data to update the auth context
			if (fetchCurrentUser) {
				await fetchCurrentUser();
			}

			navigate({ to: '/' });
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer">
					<AvatarFallback>
						{user?.email?.[0]?.toUpperCase() || '?'}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={handleLogout}
					className="cursor-pointer"
				>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
