<script lang="ts">
	import { PuzzleIcon } from '@rgossiaux/svelte-heroicons/outline';
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Challanges</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Here we have gathered some of the most interesting topics you can give a try to solve. Got a
				problem you want someone to tackle? Get in touch with us and we will see what we can do.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
		>
			<!-- <li class="flex flex-col gap-6 xl:flex-row">
				<img
					class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
					src="https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjU4NDA1OQ&ixlib=rb-4.0.3&q=80&w=1080"
					alt=""
				/>
				<div class="flex-auto">
					<h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
						Live bus trafic
					</h3>
					<p class="text-base leading-7 text-gray-600">Din Tur</p>
					<p class="mt-6 text-base leading-7 text-gray-600">
						Have you been standing and waiting for the buss and don't know if you have missed it or
						not? Help us come up with an idea on how to track the traffic in real time.
					</p>
				</div>
			</li> -->
		</ul>
	</div>
</div>
<button
	type="button"
	class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
	<PuzzleIcon class="mx-auto h-12 w-12 text-gray-400" />
	<span class="mt-2 block text-sm font-medium text-gray-900">No challanges yet uploaded</span>
</button>
