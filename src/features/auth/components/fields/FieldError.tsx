/**
 * Displays an error message for a form field
 * @param {Object} props - Component props
 * @param {string} props.error - Error message to display
 * @returns {React.ReactNode} Error message or null if no error
 */
export const FieldError = ({ error }: { error?: string }) => {
	if (!error) return null;
	return (
		<div className="text-sm font-medium text-destructive mt-1">{error}</div>
	);
};
