import { Hero } from '~/features/home/components/Hero';
import { createFileRoute } from '@tanstack/react-router';
import { MainLayout } from '~/common/components/layouts/main';

const Home = () => {
	return (
		<MainLayout>
			{/* <div className="flex flex-col justify-center"> */}
			<Hero />
			<Hero />
			<Hero />
			<Hero />
			{/* </div> */}
		</MainLayout>
	);
};

export const Route = createFileRoute('/')({
	component: Home,
});
