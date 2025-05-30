import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/common/components/shadcn-ui/button';
import { useSignUp, useAuthForm } from '@/features/auth/hooks';
import { GoogleSignInButton } from '@/features/auth/components/buttons';
import { SocialButtonSeparator } from '@/features/auth/components/separators';
import { EmailField, PasswordField } from '@/features/auth/components/fields';
import { emailValidator, passwordValidator } from '@/features/auth/validators';

/**
 * Sign-up form component for user authentication
 * @returns {React.ReactNode} Sign-up form component
 */
export const SignUpForm = () => {
	const [submissionError, setSubmissionError] = useState<string | null>(null);
	const signUpMutation = useSignUp();
	const navigate = useNavigate();

	const form = useAuthForm({
		defaultValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ value }) => {
			// Clear any previous errors
			setSubmissionError(null);
			try {
				// Sign up the user - this will also update the auth context
				await signUpMutation.mutateAsync(value);
				navigate({ to: '/' });
			} catch (error) {
				console.error('Sign up error:', error);
				setSubmissionError(
					'Failed to create account. Please try again.',
				);
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
								signUpMutation.isPending
							}
						>
							{isSubmitting || signUpMutation.isPending
								? 'Creating Account...'
								: 'Create Account'}
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
				Already have an account?{' '}
				<Link
					to="/signin"
					className="font-medium text-primary hover:underline"
				>
					Log in
				</Link>
			</div>
		</div>
	);
};
