// See https://kit.svelte.dev/docs/types#app

import type { User } from '$lib/server/xata';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User;
		}
		// interface PageData {}
		// interface Platform {}
	}

	interface EventItem {
		title: string;
		description?: string;
		date: Date;
		duration: Date;
	}
}

export {};
