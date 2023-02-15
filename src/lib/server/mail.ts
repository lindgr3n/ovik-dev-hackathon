import Mailgun from 'mailgun.js';
import formData from 'form-data';
import type { MailListMember } from 'mailgun.js/interfaces/mailListMembers';
import type { MailgunMessageData } from 'mailgun.js/interfaces/Messages';
import { env } from '$env/dynamic/private';

const DOMAIN = env.MAILGUN_DOMAIN || '';
const mailgun = new Mailgun(formData);

const client = mailgun.client({
	username: env.MAILGUN_USER || '',
	key: env.MAILGUN_KEY || ''
});

export async function sendMail(data: MailgunMessageData) {
	const result = await client.messages.create(DOMAIN, data);
	return result;
}

export async function addToMailList(listName: string, data: Array<MailListMember>) {
	try {
		const newMember = await client.lists.members.createMembers(`${listName}@${DOMAIN}`, {
			members: data,
			upsert: 'yes'
		});
		console.log('newMember', newMember);
	} catch (error) {
		console.error(error);
	}
}
