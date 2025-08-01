import { LogOut, User, Bot } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useServerFn } from '@tanstack/react-start';
import { getRouteApi } from '@tanstack/react-router';
import { Link, useNavigate } from '@tanstack/react-router';
import { Avatar, AvatarFallback } from '@/common/components/shadcn-ui/avatar';
import { signOutServerFn } from '@/features/auth/serverFns/signOutServerFn/signOutServerFn';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/common/components/shadcn-ui/dropdown-menu';

const routeApi = getRouteApi('__root__');

export const UserAvatarMenu = () => {
	const navigate = useNavigate();
	const { authSession } = routeApi.useRouteContext();
	const user = authSession?.user;
	const isSuperAdmin = user?.role === 'SUPER_ADMIN';
	const userId = user!.id;
	const signOutMutation = useMutation({
		mutationFn: useServerFn(signOutServerFn),
	});
	const handleLogout = async () => {
		const data = { userId };

		await signOutMutation.mutateAsync({ data });
		navigate({ to: '/' });
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
				<DropdownMenuItem className="cursor-pointer flex items-center gap-2 px-3 py-2">
					<Link
						to="/users/$userId"
						params={{ userId }}
						className="flex flex-row items-center content-center gap-2 w-full"
					>
						<User className="h-4 w-4" />
						<p className="text-sm">Profile</p>
					</Link>
				</DropdownMenuItem>
				{isSuperAdmin && (
					<DropdownMenuItem className="cursor-pointer flex items-center gap-2 px-3 py-2">
						<Link
							to="/agent/chats/new"
							params={{ userId }}
							className="flex flex-row items-center content-center gap-2 w-full"
						>
							<Bot className="h-4 w-4" />
							<p className="text-sm">Agent Chat</p>
						</Link>
					</DropdownMenuItem>
				)}
				<DropdownMenuItem
					className="cursor-pointer flex items-center gap-2 px-3 py-2"
					onClick={handleLogout}
					disabled={signOutMutation.isPending}
				>
					<div className="flex flex-row items-center content-center gap-2 w-full">
						<LogOut className="h-4 w-4" />
						<p className="text-sm">Log out</p>
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
