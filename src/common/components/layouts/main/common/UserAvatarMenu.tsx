import { LogOut } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { useSignOut } from '@/features/auth/hooks';
import { Avatar, AvatarFallback } from '@/common/components/shadcn-ui/avatar';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/common/components/shadcn-ui/dropdown-menu';

// TODO: FIX AUTH
export const UserAvatarMenu = () => {
	const navigate = useNavigate();
	const signOutMutation = useSignOut();
	// const user = auth ? auth.user : null;
	const user = {
		id: '1',
		email: 'test@test.com',
	};

	const handleLogout = async () => {
		if (user?.id) {
			await signOutMutation.mutateAsync({ userId: user.id });
			navigate({ to: '/' });
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer">
					<AvatarFallback>
						{user?.email?.charAt(0).toUpperCase() || '?'}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					className="cursor-pointer flex items-center gap-2 px-3 py-2"
					onClick={handleLogout}
					disabled={signOutMutation.isPending}
				>
					<div className="flex flex-row items-center content-center gap-2 w-full">
						<LogOut className="h-4 w-4" />
						<p className="text-sm">
							{signOutMutation.isPending
								? 'Logging out...'
								: 'Log out'}
						</p>
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
