import { fail } from '@sveltejs/kit';
import { addToMailList } from '../lib/server/mail';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async function () {
	return {};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();

		if (!email) {
			return fail(403, { email: 'missing' });
		}

		// TODO: Need to support custom domain before we can send a custom message
		// await sendMail({
		// 	from: 'hackathon@ovik.dev',
		// 	to: email,
		// 	subject: 'Ovik.dev - Hackathon',
		// 	html: `<p>Thanks for showing interest in Ovik.dev Hackathon</p><br/><br/>Not done yet :)`
		// });

		// Add the user to the maillist
		await addToMailList('ovik_dev_hackathon', [
			{
				name: '',
				address: email,
				subscribed: true,
				vars: {
					user_id: ''
				}
			}
		]);

		return {};
	}
};
