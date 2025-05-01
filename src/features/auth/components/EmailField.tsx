import { Input } from '~/components/ui/input';
import type { FieldProps } from '~/features/auth/interfaces';
import { FieldError } from '~/features/auth/components/FieldError';

/**
 * Email field component for authentication forms
 * @param {Object} props - Component props
 * @param {FieldProps} props.field - Field properties
 * @param {string} [props.label] - Label text for the field
 * @returns {React.ReactNode} Email field component
 */
export const EmailField = ({
	field,
	label = 'Email',
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
			type="email"
			placeholder="john.doe@example.com"
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
