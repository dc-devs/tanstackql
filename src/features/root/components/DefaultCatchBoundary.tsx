import type { ErrorComponentProps } from '@tanstack/react-router';
import {
	Link,
	useMatch,
	useRouter,
	rootRouteId,
	ErrorComponent,
} from '@tanstack/react-router';

export const DefaultCatchBoundary = ({ error }: ErrorComponentProps) => {
	const router = useRouter();
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	});

	return (
		<div className="min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6">
			<ErrorComponent error={error} />
			<div className="flex gap-2 items-center flex-wrap">
				<button
					onClick={() => {
						router.invalidate();
					}}
					className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`}
				>
					Try Again
				</button>
				{isRoot ? (
					<Link
						to="/"
						className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`}
					>
						Home
					</Link>
				) : (
					<Link
						to="/"
						className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`}
						onClick={(e) => {
							e.preventDefault();
							window.history.back();
						}}
					>
						Go Back
					</Link>
				)}
			</div>
		</div>
	);
};
