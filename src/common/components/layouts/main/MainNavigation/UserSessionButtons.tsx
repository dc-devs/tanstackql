import { Link } from '@tanstack/react-router';
import { Button } from '@/common/components/shadcn-ui/button';

export const UserSessionButtons = () => {
	return (
		<>
			<Link to="/signin">
				<Button
					size="sm"
					variant="outline"
					className="h-9 px-4 rounded-md text-base text-primary border-primary cursor-pointer"
				>
					Log In
				</Button>
			</Link>
			<Link to="/signup">
				<Button
					size="sm"
					className="h-9 px-4 rounded-md text-base cursor-pointer"
				>
					Sign Up
				</Button>
			</Link>
		</>
	);
};
