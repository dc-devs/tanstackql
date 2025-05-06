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

	const handleLogout = async () => {
		if (user?.id) {
			try {
				await signOutMutation.mutateAsync({ userId: user.id });
				navigate({ to: '/' });
			} catch (error) {
				console.error('Failed to sign out:', error);
			}
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarFallback>
						{user?.email?.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={handleLogout}
					disabled={signOutMutation.isPending}
				>
					{signOutMutation.isPending ? 'Signing out...' : 'Sign out'}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
