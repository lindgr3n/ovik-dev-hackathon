import { addToMailList } from '$lib/server/mail';
import { createUser, isUserRole } from '$lib/server/repository/userRepository';
import { error, fail } from '@sveltejs/kit';
import { FetcherError } from '@xata.io/client';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async function () {
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
	default: async ({ request }) => {
		const data = await request.formData();

		const first_name = data.get('first_name')?.toString();
		const last_name = data.get('last_name')?.toString();
		const email = data.get('email')?.toString();
		const role = data.get('role')?.toString() ?? '';

		if (!email) {
			return fail(400, { email: 'missing' });
		}
		if (!role) {
			return fail(400, { role: 'missing' });
		}
		if (!isUserRole(role)) {
			return fail(400, { role: 'icorrect' });
		}

		try {
			const user = await createUser({
				first_name: first_name,
				last_name: last_name,
				email: email,
				role: role
			});

			if (!user) {
				return error(400, { message: 'failed' });
			}
			// Add the user to the maillist
			await addToMailList('ovik_dev_hackathon', [
				{
					name: `${first_name} ${last_name}`,
					address: email,
					subscribed: true,
					vars: {
						user_id: user.id
					}
				}
			]);
		} catch (e: unknown) {
			if (e instanceof FetcherError) {
				e.errors?.find((e) => e.message?.includes('[email]: is not unique'));
				return fail(400, { email: 'user already exist' });
			}
			console.log('Create user failed', error);
			throw error(500, { message: 'Failed to create a user' });
		}

		return {
			success: true
		};
	}
};
