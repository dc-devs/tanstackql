// TODO: review why this is needed...
export interface FieldProps {
	name: string;
	handleChange: (value: string) => void;
	handleBlur: () => void;
	state: {
		value: string;
		meta: {
			errors: (string | undefined)[]; // More specific than any[]
		};
	};
}
