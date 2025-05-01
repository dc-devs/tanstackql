import { Input } from '~/components/ui/input';
import type { FieldProps } from '~/features/auth/interfaces';
import { FieldError } from '~/features/auth/components/FieldError';

/**
 * Password field component for authentication forms
 * @param {Object} props - Component props
 * @param {FieldProps} props.field - Field properties
 * @param {string} [props.label] - Label text for the field
 * @returns {React.ReactNode} Password field component
 */
export const PasswordField = ({
	field,
	label = 'Password',
}: {
	field: FieldProps;
	label?: string;
}) => (
	<>
		<label
			htmlFor={field.name}
			className="text-sm font-medium leading-none"
		>
			{label}
		</label>
		<Input
			id={field.name}
			name={field.name}
			type="password"
			placeholder="••••••••"
			value={field.state.value}
			onChange={(e) => field.handleChange(e.target.value)}
			onBlur={field.handleBlur}
			className={
				field.state.meta.errors.length ? 'border-destructive' : ''
			}
		/>
		<FieldError error={field.state.meta.errors[0]} />
	</>
);
