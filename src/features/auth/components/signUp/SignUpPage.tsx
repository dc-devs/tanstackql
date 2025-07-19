import { MainLayout } from '@/common/components/layouts/main';
import { SignUpForm } from '@/features/auth/components/signUp/SignUpForm';

export const SignUpPage = () => {
	return (
		<MainLayout>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="w-[400px] max-w-md">
					<div className="mb-8 text-center">
						<h1 className="text-3xl font-bold tracking-tight mb-2">
							Create your account
						</h1>
						<p className="text-muted-foreground text-sm">
							Enter your information to get started
						</p>
					</div>

					<SignUpForm />
				</div>
			</div>
		</MainLayout>
	);
};
