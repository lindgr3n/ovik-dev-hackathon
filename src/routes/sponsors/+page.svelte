<script lang="ts">
	interface Sponsor {
		name: string;
		icon: string;
	}
	const mainSponsors: Array<Sponsor> = [];
	const sponsors: Array<Sponsor> = [];
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
			<div class="mx-auto w-full max-w-xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900">Our main sponsors</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600" />
				<div class="mt-8 flex items-center gap-x-6" />
			</div>
			<div
				class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
			>
				{#each mainSponsors as sponsor}
					<img
						class="max-h-12 w-full object-contain object-left"
						src={sponsor.icon}
						alt={sponsor.name}
						width="105"
						height="48"
					/>
				{/each}
			</div>
		</div>
	</div>
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<h2 class="text-lg font-semibold leading-8 text-gray-900">
					Big thanks to everyone else that is helping us
				</h2>
				<div
					class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"
				>
					{#each sponsors as sponsor}
						<img
							class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
							src={sponsor.icon}
							alt={sponsor.name}
							width="158"
							height="48"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
