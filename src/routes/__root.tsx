import { getHead } from '~/features/root/utils';
import { NotFound } from '~/features/root/components/NotFound';
import { createRootRoute } from '@tanstack/react-router';
import { RootDocument, RootComponent } from '~/features/root/components';
import { DefaultCatchBoundary } from '~/features/root/components/DefaultCatchBoundary';

export const Route = createRootRoute({
	head: getHead,
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
});
