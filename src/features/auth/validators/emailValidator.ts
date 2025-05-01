/**
 * Validates an email address
 * @param {Object} props - Component props
 * @param {string} props.value - Email address to validate
 * @returns {string | undefined} Error message or undefined if valid
 */
export const emailValidator = ({ value }: { value: string }) => {
	if (!value) return 'Email is required';
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return !emailRegex.test(value)
		? 'Please enter a valid email address'
		: undefined;
};
