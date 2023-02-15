import { xata } from '../xataClient';
import crypto from 'crypto';
import type { User } from '../xata';

export enum UserRole {
	DEVELOPER,
	DESIGNER,
	PROJECT_MANAGER,
	TESTER,
	OTHER
}
export interface UserDataInput {
	email: string;
	first_name?: string;
	last_name?: string;
	role?: UserRole;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isUserRole(role: any): role is UserRole {
	return Object.values(UserRole).includes(role);
}

export async function getUser(id: string): Promise<User | null> {
	return await xata.db.user.filter('id', id).getFirst();
}

export async function createUser(data: UserDataInput) {
	//
	const response = await xata.db.user.create({
		email: data.email,
		first_name: data.first_name,
		last_name: data.last_name,
		role: data.role?.toString()
	});

	return response;
}

export async function createOTP(user: User, kind = 'profile_update') {
	// Check if a key already exist in that case delete it then create a new (Ur mby just update the token and expires_at)
	const resetToken = await xata.db.one_time_password.create({
		token: crypto.randomUUID(),
		user_id: user.id,
		kind: kind,
		expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24)
	});
	return resetToken;
}

// WIP
export async function verifyToken(token: string, kind = 'profile_update') {
	const existingToken = await xata.db.one_time_password
		.filter({ token: token, kind: kind, expires_at: {} })
		.getFirst();
	if (!existingToken) {
		return null;
	}

	// if (existingToken.expires_at) {
	// }
}
