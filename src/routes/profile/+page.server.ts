import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async function ({ locals }) {
	// Check if we have a user otherwise redirect to start
	const user = locals.user;
	if (!user) {
		throw redirect(302, '/');
	}
	const roles = [
		{
			value: 'DEVELOPER',
			name: 'Developer'
		},
		{
			value: 'DESIGNER',
			name: 'Designer'
		},
		{
			value: 'PROJECT_MANAGER',
			name: 'Project manager'
		},
		{
			value: 'TESTER',
			name: 'Test'
		},
		{
			value: 'OTHER',
			name: 'Other'
		}
	];
	return {
		roles: roles
	};
};

export const actions: Actions = {
	default: async () => {
		// TODO: Update the user information
		return {};
	}
};
