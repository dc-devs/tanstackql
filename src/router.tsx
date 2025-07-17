import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

function NotFound() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '50vh',
				padding: '2rem',
				textAlign: 'center',
			}}
		>
			<h1
				style={{
					fontSize: '4rem',
					margin: '0 0 1rem 0',
					color: '#666',
				}}
			>
				404
			</h1>
			<h2
				style={{
					fontSize: '1.5rem',
					margin: '0 0 1rem 0',
					color: '#333',
				}}
			>
				Page Not Found
			</h2>
			<p style={{ color: '#666', marginBottom: '2rem' }}>
				The page you're looking for doesn't exist.
			</p>
			<a
				href="/"
				style={{
					padding: '0.75rem 1.5rem',
					backgroundColor: '#007bff',
					color: 'white',
					textDecoration: 'none',
					borderRadius: '0.375rem',
					fontSize: '1rem',
				}}
			>
				Go Home
			</a>
		</div>
	);
}

export function createRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultNotFoundComponent: NotFound,
	});

	return router;
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
