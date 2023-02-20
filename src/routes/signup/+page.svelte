<script lang="ts">
	import Notification from '$lib/components/molecules/Notification.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let showModalSuccess = form?.success;

	$: {
		if (showModalSuccess) {
			setInterval(() => (showModalSuccess = false), 8000);
		}
	}
</script>

{#if showModalSuccess}
	<Notification
		title="You are in 🙌"
		message="Thanks for signing up and taking a part in this event! Stay tuned for more information in your inbox 📫"
		on:close={() => (showModalSuccess = false)}
	/>
{/if}

<div class="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
	<div class="relative mx-auto max-w-xl">
		<svg
			class="absolute left-full translate-x-1/2 transform"
			width="404"
			height="404"
			fill="none"
			viewBox="0 0 404 404"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="85737c0e-0916-41d7-917f-596dc7edfa27"
					x="0"
					y="0"
					width="20"
					height="20"
					patternUnits="userSpaceOnUse"
				>
					<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
				</pattern>
			</defs>
			<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
		</svg>
		<svg
			class="absolute right-full bottom-0 -translate-x-1/2 transform"
			width="404"
			height="404"
			fill="none"
			viewBox="0 0 404 404"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="85737c0e-0916-41d7-917f-596dc7edfa27"
					x="0"
					y="0"
					width="20"
					height="20"
					patternUnits="userSpaceOnUse"
				>
					<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
				</pattern>
			</defs>
			<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
		</svg>
		<div class="text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Sign up for the event
			</h2>
			<p class="mt-4 text-lg leading-6 text-gray-500">
				Please fill your information to be able to register for the hackathon. By signing up you
				agree to show up at the event <b>FREE</b> of cost and bringing a smile 😀
			</p>
		</div>
		<div class="mt-12">
			<form method="post" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
				<div>
					<label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
					<div class="mt-1">
						<input
							type="text"
							name="first_name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							value={form?.first_name ?? ''}
							required
						/>
						{#if form?.first_name_missing}<p class="text-red-500">
								The first name field is required!
							</p>{/if}
					</div>
				</div>
				<div>
					<label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
					<div class="mt-1">
						<input
							type="text"
							name="last_name"
							id="last-name"
							autocomplete="family-name"
							class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							value={form?.last_name ?? ''}
							required
						/>
						{#if form?.last_name_missing}<p class="text-red-500">
								The last name field is required!
							</p>{/if}
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="role" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
						>Role</label
					>
					<div class="mt-1 sm:mt-0">
						<select
							id="role"
							name="role"
							class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							value={form?.role ?? ''}
							required
						>
							{#each data.roles as role}
								<option value={role.value}>{role.name}</option>
							{/each}
						</select>
						{#if form?.role_missing}<p class="text-red-500">The role field is required!</p>{/if}
						{#if form?.role_incorrect}<p class="text-red-500">
								The role field provided was not valid!
							</p>{/if}
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
							value={form?.email ?? ''}
						/>
						{#if form?.email_missing}<p class="text-red-500">The email field is required!</p>{/if}
						{#if form?.email_exist}<p class="text-red-500">The email is already taken!</p>{/if}
					</div>
				</div>

				<div class="sm:col-span-2">
					<div class="flex items-start">
						<div class="ml-3">
							<p class="text-base text-gray-500">
								By selecting this, you agree to the
								<a href="/rules" target="_blank" class="font-medium text-gray-700 underline"
									>Event rules</a
								>
							</p>
						</div>
					</div>
				</div>
				<div class="sm:col-span-2">
					<button
						type="submit"
						class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>Sign me up 👍</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
