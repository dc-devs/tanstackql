/**
 * Represents a user in the system
 * @interface User
 * @property {string} id - Unique identifier for the user
 * @property {string} role - User's role in the system
 * @property {string} email - User's email address
 * @property {string} createdAt - Timestamp when the user was created
 * @property {string} updatedAt - Timestamp when the user was last updated
 */
export interface User {
	id: string;
	role: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}
