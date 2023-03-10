<script lang="ts">
	import HighlightText from '$lib/components/molecules/HighlightText.svelte';
	import Notification from '$lib/components/molecules/Notification.svelte';
	import {
		ChatIcon,
		ThumbUpIcon,
		EmojiHappyIcon,
		UsersIcon,
		MusicNoteIcon
	} from '@rgossiaux/svelte-heroicons/outline';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';

	const manifesto = [
		{
			title: 'Speak',
			icon: ChatIcon,
			description: 'Everyone should be able to speak there mind'
		},
		{
			title: 'Teamwork',
			icon: UsersIcon,
			description: "Everyone is working together as a team. There's no I in Team"
		},
		{
			title: 'Fun',
			icon: EmojiHappyIcon,
			description: 'Remeber to have fun, we are all here because we want to solve a problem'
		},
		{
			title: 'Relaxed',
			icon: MusicNoteIcon,
			description: 'Make sure to take breaks, eat and drink. And most important sleep'
		},
		{
			title: 'Encourage',
			icon: ThumbUpIcon,
			description: 'Make sure to cheer eachother for each commit and challange you overcome'
		},
		{
			title: 'Finish',
			icon: ThumbUpIcon,
			description: 'This is the time where done is better then perfect'
		}
	];

	const faq = [
		{
			question: 'How do i join?',
			answer: 'By signing up you will recive a mail with instruction on how to sign up'
		},
		{
			question: 'Do i need my own computer?',
			answer: 'Yes, to be able to code you need to bring your own computer.'
		},
		{
			question: 'Can i join without coding skills?',
			answer:
				'Absolutley! Do you have design, ux, ui, project management or just have ideas feel free to join! '
		}
	];

	const sponsors = [
		{
			name: '',
			logo: ''
		}
	];

	const futureWords = [
		'unlock the potential of the digital world.',
		"solve tomorrow's problems today",
		'collaborate and create',
		'turn ideas into impact',
		'empower the next generation of innovators',
		'change the world, one hack at a time',
		'build a better future through technology.'
	];

	export let form: ActionData;

	let futureWordIndex = 0;
	let futureWord = futureWords[futureWordIndex];
	let showModalSuccess = form?.success;

	$: {
		if (showModalSuccess) {
			setInterval(() => (showModalSuccess = false), 5000);
		}
	}
	setInterval(() => {
		if (futureWordIndex > futureWords.length - 1) {
			futureWordIndex = 0;
		}
		futureWord = '';
		setTimeout(() => {
			futureWord = futureWords[futureWordIndex++];
		}, 800);
	}, 5500);
</script>

{#if showModalSuccess}
	<Notification
		title="Subscribed ????"
		message="Thanks for being in the loop! Stay tuned for more information in your inbox ????"
		on:close={() => (showModalSuccess = false)}
	/>
{/if}
<main>
	<section class="bg-gray-900 px-4 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="lg:grid lg:grid-cols-3 lg:gap-8">
				<div
					class="mx-auto max-w-md sm:max-w-3xl col-span-2 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
				>
					<div class="lg:py-24">
						<h1
							class="mt-4 text-3xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
						>
							<span class="block">Finding ways to</span>

							<div
								style="height: 130px"
								class="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5"
							>
								{#key futureWord}
									<div transition:fade={{ delay: 200, duration: 300 }}>
										{futureWord}
									</div>
								{/key}
							</div>
						</h1>
						<p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
							Join the Ovik.dev <span
								class="hover:text-yellow-500 font-mono hover:underline hover:uppercase"
								>hackathon</span
							>
							and be part of a community that's making a difference. Collaborate with like-minded individuals
							and tackle some of our daily challenges by creating innovative solutions.
						</p>
						<div class="mt-10 sm:mt-12">
							<form method="post" class="sm:mx-auto sm:max-w-xl lg:mx-0">
								<div class="sm:flex">
									<div class="min-w-0 flex-1">
										<label for="email" class="sr-only">Email address</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											placeholder="Enter your email"
											class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
										/>
										{#if form?.email}<p class="text-red-500">The email field is required!</p>{/if}
									</div>
									<div class="mt-3 sm:mt-0 sm:ml-3">
										<button
											type="submit"
											class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
											>Keep me updated</button
										>
									</div>
								</div>
								<p class="mt-3 italic text-sm text-gray-300">
									You will only recive information about this and future events.
								</p>
							</form>
						</div>
					</div>
				</div>
				<div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
					<div class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
						<!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
						<img
							class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Manifesto -->
	<section class="relative bg-white py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<h2 class="text-lg font-semibold text-cyan-600">What we stand for</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				An enviroment where <HighlightText>everyone</HighlightText> is included
			</p>
			<p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
				We want everyone to feel included and free to speak there mind with the same goal of
				building awesome solutions. If you don't feel this please reach out to closest organizer.
			</p>
			<div class="mt-12">
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each manifesto as item}
						<div class="pt-6">
							<div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span
											class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg"
										>
											<svelte:component this={item.icon} class="h-6 w-6 text-white" />
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
										{item.title}
									</h3>
									<p class="mt-5 text-base text-gray-500">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonial section ACTIVATE NEXT YAER -->
	<!-- <section class="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
				<div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
					<div class="relative lg:-my-8">
						<div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
						<div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
							<div
								class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
							>
								<img
									class="object-cover lg:h-full lg:w-full"
									src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
						<div class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
							<blockquote>
								<div>
									<svg
										class="h-12 w-12 text-white opacity-25"
										fill="currentColor"
										viewBox="0 0 32 32"
										aria-hidden="true"
									>
										<path
											d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
										/>
									</svg>
									<p class="mt-6 text-2xl font-medium text-white">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae
										laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
									</p>
								</div>
								<footer class="mt-6">
									<p class="text-base font-medium text-white">Judith Black</p>
									<p class="text-base font-medium text-cyan-100">CEO at PureInsights</p>
								</footer>
							</blockquote>
						</div>
					</div>
				</div>
			</section> -->

	<!-- CTA Section -->
	<section class="relative bg-gray-900">
		<div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
			<!-- https://unsplash.com/photos/TamMbr4okv4 -->
			<img
				class="h-full w-full object-cover"
				src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
				alt=""
			/>
			<div
				aria-hidden="true"
				class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
			/>
		</div>
		<div
			class="relative mx-auto max-w-md py-12 px-6 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32"
		>
			<div class="md:ml-auto md:w-1/2 md:pl-10">
				<h2 class="text-lg font-semibold text-gray-300">Organizers</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					We???re here to help
				</p>
				<p class="mt-3 text-lg text-gray-300">
					Any questions, improvements or other ideas you can think of please reach out to us.
					Contact information exist in the signup email.<br /><br />Want to help out? Feel free to
					reach out to us via the signup email where you will find our contact information.
				</p>
				<div class="mt-8">
					<div class="inline-flex rounded-md shadow" />
				</div>
			</div>
		</div>
	</section>

	<!-- Logo Cloud -->
	<section class="flex flex-col mx-auto pt-24 px-6 lg:px-8">
		<p class="text-center text-base font-semibold text-gray-500 pb-4">Thanks to our sponsors</p>
		<div class="flex justify-center items-center gap-8 flex-wrap">
			{#each sponsors as sponsor}
				<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img class="h-12" src={sponsor.logo} alt={sponsor.name} />
				</div>
			{/each}
		</div>
	</section>

	<!-- FAQ -->
	<section
		class="mx-auto max-w-2xl divide-y divide-gray-200 py-24 px-6 lg:max-w-7xl lg:py-32 lg:px-8"
	>
		<h2 id="faq-heading" class="text-3xl font-bold tracking-tight text-gray-900">
			Frequently asked questions
		</h2>
		<div class="mt-8">
			<dl class="divide-y divide-gray-200">
				{#each faq as item}
					<div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
						<dt class="text-base font-medium text-gray-900 md:col-span-5">{item.question}</dt>
						<dd class="mt-2 md:col-span-7 md:mt-0">
							<p class="text-base text-gray-500">
								{item.answer}
							</p>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>
</main>
<footer class="bg-black" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-md px-6 pt-12 sm:max-w-7xl lg:px-8 lg:pt-16">
		<div class="xl:grid xl:grid-cols-1 xl:gap-8">
			<div class="space-y-8 xl:col-span-1">
				<img class="h-10 text-black" src="/ovikdevloggo.png" alt="Company name" />
				<p class="text-base text-gray-200">
					Doing all we can to support entrepreneurs solving the real and critical problems that make
					life on this planet better.
				</p>
				<div class="flex space-x-6">
					<a href="#" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Facebook</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>

					<a href="#" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Instagram</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>

					<a href="#" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Twitter</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
					</a>

					<a
						href="https://github.com/lindgr3n/ovik-dev-hackathon"
						class="text-gray-400 hover:text-gray-500"
					>
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="mt-12 border-t border-gray-200 py-8">
			<p class="text-base text-gray-400 xl:text-center">
				&copy; 2023 Impact Quest. All rights reserved.
			</p>
		</div>
	</div>
</footer>
