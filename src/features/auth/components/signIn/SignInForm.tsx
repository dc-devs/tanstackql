import { useState } from 'react';
import { SessionResponse } from '@/gql/graphql';
import { useRouter, useLocation } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { useMutation } from '@tanstack/react-query';
import { useAuthForm } from '@/features/auth/hooks';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/common/components/shadcn-ui/button';
import { signInServer } from '@/features/auth/serverFns/signIn';
import { GoogleSignInButton } from '@/features/auth/components/buttons';
import { SocialButtonSeparator } from '@/features/auth/components/separators';
import { EmailField, PasswordField } from '@/features/auth/components/fields';
import { emailValidator, passwordValidator } from '@/features/auth/validators';

/**
 * Sign-in form component for user authentication
 * @returns {React.ReactNode} Sign-in form component
 */
export const SignInForm = () => {
	const router = useRouter();
	const location = useLocation();
	const navigate = useNavigate();
	const [submissionError, setSubmissionError] = useState<string | null>(null);
	const signInMutation = useMutation({
		mutationFn: useServerFn(signInServer),
	});
	const form = useAuthForm({
		defaultValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ value: data }) => {
			// Clear any previous errors
			setSubmissionError(null);

			try {
				// Sign in the user - this will also update the auth context
				const authSession = await signInMutation.mutateAsync({ data });

				if (authSession.isAuthenticated) {
					const { user } = authSession as SessionResponse;
					const userId = user!.id;

					await router.invalidate();

					navigate({
						to: '/users/$userId',
						params: { userId },
						state: { from: location.pathname } as Record<
							string,
							unknown
						>,
					});

					return;
				}
			} catch (error) {
				console.error('Sign in error:', error);
				setSubmissionError('Failed to sign in. Please try again.');
			}
		},
	});

	return (
		<div className="bg-card/30 p-8 border rounded-xl shadow-sm">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-5"
			>
				{/* Email Field */}
				<div className="space-y-2">
					<form.Field
						name="email"
						validators={{
							onChange: emailValidator,
						}}
					>
						{(field) => <EmailField field={field} />}
					</form.Field>
				</div>

				{/* Password Field */}
				<div className="space-y-2">
					<form.Field
						name="password"
						validators={{
							onChange: passwordValidator,
						}}
					>
						{(field) => <PasswordField field={field} />}
					</form.Field>
				</div>

				{/* Display form-wide submission error */}
				{submissionError && (
					<div className="text-sm font-medium text-destructive">
						{submissionError}
					</div>
				)}

				{/* Submit Button */}
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => (
						<Button
							type="submit"
							className="w-full mt-6 cursor-pointer"
							disabled={
								!canSubmit ||
								isSubmitting ||
								signInMutation.isPending
							}
						>
							{isSubmitting || signInMutation.isPending
								? 'Logging in...'
								: 'Log In'}
						</Button>
					)}
				</form.Subscribe>
			</form>

			<div className="mt-8">
				<SocialButtonSeparator />
				<div className="mt-6 mb-4 grid grid-cols-1 gap-3">
					<GoogleSignInButton />
				</div>
			</div>

			<div className="mt-6 text-center text-sm">
				Don't have an account?{' '}
				<Link
					to="/signup"
					className="font-medium text-primary hover:underline"
				>
					Sign up
				</Link>
			</div>
		</div>
	);
};
