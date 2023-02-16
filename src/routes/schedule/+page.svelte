<script lang="ts">
	import Calender from '$lib/components/molecules/Calender.svelte';
	import type { PageData } from './$types';
	import { format } from 'date-fns';

	let selected: 'friday' | 'saturday' | 'sunday' = 'friday';
	const selectedDay = new Map();

	export let data: PageData;
	selectedDay.set('friday', data.friday);
	selectedDay.set('saturday', data.saturday);
	selectedDay.set('sunday', data.sunday);

	function convertDate(key: 'friday' | 'saturday' | 'sunday') {
		return selectedDay.get(key) ? format(selectedDay.get(key)[0].date, 'LLL dd yyyy') : '';
	}
</script>

<div class="flex h-full flex-col">
	<div class="pt-8">
		<div class="sm:hidden">
			<label for="tabs" class="sr-only">Select a tab</label>
			<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
			<select
				id="tabs"
				name="tabs"
				class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
				bind:value={selected}
			>
				<option value="friday">Friday - {convertDate('friday')}</option>
				<option value="saturday">Saturday {convertDate('saturday')}</option>
				<option value="sunday">Sunday {convertDate('sunday')}</option>
			</select>
		</div>
		<div class="hidden sm:block">
			<div class="border-b border-gray-200">
				<nav class="-mb-px flex justify-center" aria-label="Tabs">
					<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
					<div
						class={`${
							selected == 'friday'
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
						} w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer`}
						on:click={() => (selected = 'friday')}
						on:keypress={() => (selected = 'friday')}
					>
						<div>
							<h1 class="text-lg font-semibold leading-6 text-gray-900">Friday</h1>
							<time datetime="2023-05-01" class="sm:hidden mt-1 text-sm text-gray-500"
								>{convertDate('friday')}</time
							>
							<time datetime="2023-05-01" class="hidden sm:inline mt-1 text-sm text-gray-500"
								>{convertDate('friday')}</time
							>
						</div>
					</div>

					<div
						class={`${
							selected == 'saturday'
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
						} w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer`}
						on:click={() => (selected = 'saturday')}
						on:keypress={() => (selected = 'saturday')}
					>
						<div>
							<h1 class="text-lg font-semibold leading-6 text-gray-900">Saturday</h1>
							<time datetime="2023-05-01" class="sm:hidden mt-1 text-sm text-gray-500"
								>{convertDate('saturday')}</time
							>
							<time datetime="2023-05-01" class="hidden sm:inline mt-1 text-sm text-gray-500"
								>{convertDate('saturday')}</time
							>
						</div>
					</div>

					<div
						class={`${
							selected == 'sunday'
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
						} w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer`}
						on:click={() => (selected = 'sunday')}
						on:keypress={() => (selected = 'sunday')}
					>
						<div>
							<h1 class="text-lg font-semibold leading-6 text-gray-900">Sunday</h1>
							<time datetime="2023-05-23" class="sm:hidden mt-1 text-sm text-gray-500"
								>{convertDate('sunday')}</time
							>
							<time datetime="2023-05-23" class="hidden sm:inline mt-1 text-sm text-gray-500"
								>{convertDate('sunday')}</time
							>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>

	<Calender data={selectedDay.get(selected)} />
</div>
