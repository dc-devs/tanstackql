/**
 * Authentication form hook factory using TanStack Form
 * Creates reusable form hooks and components for authentication forms
 * @see {@link https://tanstack.com/form/latest/docs/framework/react/quick-start}
 */

import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

/**
 * Form contexts for authentication-specific form state management
 * @type {Object} Form context objects
 * @property {React.Context} fieldContext - Context for individual form field state and behaviors
 * @property {React.Context} formContext - Context for overall authentication form state and behaviors
 */
const { fieldContext, formContext } = createFormHookContexts();

/**
 * Factory for creating authentication form hooks and HOCs
 * Pre-binds form components and contexts for consistent auth form instances
 * @type {Object} Authentication form utilities
 * @property {Function} useAuthForm - Custom hook for managing authentication form state
 * @property {Function} withAuthForm - HOC to wrap components with auth form context providers
 */
export const { useAppForm: useAuthForm, withForm: withAuthForm } =
	createFormHook({
		fieldComponents: {},
		formComponents: {},
		fieldContext,
		formContext,
	});
