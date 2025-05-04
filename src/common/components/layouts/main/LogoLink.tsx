import { Logo } from '~/common/icons';
import { Link } from '@tanstack/react-router';

export const LogoLink = () => {
	return (
		<Link to="/" className="flex items-center gap-2 mr-12">
			<Logo className="h-5 w-5" />
			<span className="text-lg font-semibold">Agent Starter</span>
		</Link>
	);
};
