/**
 * Validates a password
 * @param {Object} props - Component props
 * @param {string} props.value - Password to validate
 * @returns {string | undefined} Error message or undefined if valid
 */
export const passwordValidator = ({ value }: { value: string }) => {
	if (!value) return 'Password is required';
	return value.length < 8
		? 'Password must be at least 8 characters'
		: undefined;
};
