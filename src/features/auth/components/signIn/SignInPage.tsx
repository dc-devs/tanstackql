import { SignInForm } from '@/features/auth/components/signIn';
import { MainLayout } from '@/common/components/layouts/main';

export const SignInPage = () => {
	return (
		<MainLayout>
			<div className="flex-1 flex flex-col items-center justify-center">
				<div className="w-[400px] max-w-md">
					<div className="mb-8 text-center">
						<h1 className="text-3xl font-bold tracking-tight mb-2">
							Log in to your account
						</h1>
						<p className="text-muted-foreground text-sm">
							Enter your credentials to access your account
						</p>
					</div>

					<SignInForm />
				</div>
			</div>
		</MainLayout>
	);
};
