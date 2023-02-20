<script>
	import '../app.postcss';

	import { MenuIcon, XIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import * as Fathom from 'fathom-client';

	let showMenu = false;

	const menu = [
		{
			name: 'Schedule',
			href: '/schedule'
		},
		// Activate next year
		// {
		// 	name: 'Entrys',
		// 	href: '/entrys'
		// },
		{
			name: 'Challanges',
			href: '/challanges'
		},
		{
			name: 'Sponsors',
			href: '/sponsors'
		}
	];

	onMount(() => {
		Fathom.load('KDNOUWNY', {
			includedDomains: ['ovik-dev-hackathon.netlify.app', 'ovik-dev-hackathon.vercel.app'],
			excludedDomains: ['localhost']
		});
	});
	$: {
		// Track page view when path changes.
		$page.url.pathname,
			$page.url.host === 'ovik-dev-hackathon.netlify.app' && browser && Fathom.trackPageview();
	}
</script>

<div class="bg-white">
	<div class="relative overflow-hidden">
		<header class="relative">
			<div class="bg-gray-900 py-4">
				<nav
					class="relative mx-auto flex max-w-7xl items-center justify-between px-6"
					aria-label="Global"
				>
					<div class="flex flex-1 items-center">
						<div class="flex w-full items-center justify-between">
							<a class="flex items-center" href="/">
								<img class="h-8 w-auto sm:h-10 pr-4" src="/ovikdevloggo.png" alt="" />
								<span class="text-base font-medium text-white hover:text-gray-300"
									>Ovik.dev - hackathon</span
								>
							</a>
							<div class="flex justify-end">
								<div class="-mr-2 flex items-center md:hidden">
									<button
										type="button"
										class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
										aria-expanded="false"
										on:click={() => (showMenu = true)}
										on:keydown={() => (showMenu = true)}
									>
										<span class="sr-only">Open main menu</span>
										<MenuIcon class="h-6 w-6" />
									</button>
								</div>
							</div>
						</div>
						<div class="hidden space-x-8 pr-8 md:ml-10 md:flex">
							{#each menu as item}
								<a href={item.href} class="text-base font-medium text-white hover:text-gray-300"
									>{item.name}</a
								>
							{/each}
						</div>
						{#if $page.url.pathname != '/signup'}
							<a
								href="/signup"
								class="hidden md:block px-6 text-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
								>Signup</a
							>
						{/if}
					</div>
				</nav>
			</div>

			<!--
          Mobile menu, show/hide based on menu open state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
			{#if showMenu}
				<div
					class="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden z-10"
					transition:fade={{ delay: 250, duration: 300 }}
				>
					<div
						class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5"
					>
						<div class="flex items-center justify-between px-5 py-4 bg-black">
							<a class="flex items-center" href="/">
								<img class="h-8 w-auto sm:h-10 pr-4" src="/ovikdevloggo.png" alt="" />
								<span class="text-base font-medium text-white hover:text-gray-300"
									>Ovik.dev - hackathon</span
								>
							</a>
							<div class="-mr-2">
								<button
									type="button"
									class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
									on:click={() => (showMenu = false)}
									on:keydown={() => (showMenu = false)}
								>
									<span class="sr-only">Close menu</span>
									<XIcon class="h-6 w-6" />
								</button>
							</div>
						</div>
						<div class="p-5 pb-6">
							<div class="space-y-1 px-2 pb-4">
								{#each menu as item}
									<a
										href={item.href}
										class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
										on:click={() => (showMenu = false)}>{item.name}</a
									>
								{/each}
							</div>
							<hr class="sm:border-t sm:border-gray-200 pb-4" />
							{#if $page.url.pathname != '/signup'}
								<a
									href="/signup"
									class="block w-full px-6 text-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
									on:click={() => (showMenu = false)}>Signup</a
								>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		</header>
		<slot />
	</div>
</div>
