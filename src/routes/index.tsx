import { Hero } from '@/features/home/components/Hero';
import { createFileRoute } from '@tanstack/react-router';
import { MainLayout } from '@/common/components/layouts/main';

const Home = () => {
	return (
		<MainLayout>
			<div className="flex-1 flex flex-col items-center justify-center">
				<Hero />
			</div>
		</MainLayout>
	);
};

export const Route = createFileRoute('/')({
	component: Home,
});
