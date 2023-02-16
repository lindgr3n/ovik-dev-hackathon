<script lang="ts">
	export let data: Array<EventItem> = [];

	console.log(data);

	function getGridRowStart(item: EventItem) {
		return 2 + item.date.getHours() * 12 + (item.date.getMinutes() / 60) * 12;
	}

	function getGridRowSpan(item: EventItem) {
		return ((item.duration.getTime() - item.date.getTime()) / 1000 / 60 / 60) * 12;
	}
</script>

<div class="isolate flex flex-auto overflow-hidden bg-white">
	<div class="flex flex-auto flex-col overflow-auto">
		<div class="flex w-full flex-auto">
			<div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
			<div class="grid flex-auto grid-cols-1 grid-rows-1">
				<!-- Horizontal lines -->
				<div
					class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
					style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
				>
					<div class="row-end-1 h-7" />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							00:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							01:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							02:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							03:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							04:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							05:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							06:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							07:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							08:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							09:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							10:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							11:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							12:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							13:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							14:00PM
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							15:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							16:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							17:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							18:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							19:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							20:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							21:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							22:00
						</div>
					</div>
					<div />
					<div>
						<div class="-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
							23:00
						</div>
					</div>
					<div />
				</div>

				<!-- Events -->
				<!-- Start on row 2 and 12 span for every hour -->
				<!-- 06:00 => 2 + (12*6) => grid-row -->
				<!-- 06:30 => 2 + (12*6) => grid-row -->
				<!-- duration 07:00 - 06:00 => 3600000 ms /1000 => 3600 s /60 => 60 min /60 => 1 * 12 => 12 span-->
				<ol
					class="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
					style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto"
				>
					{#each data as item}
						<li
							class="relative mt-px flex"
							style={`grid-row: ${getGridRowStart(item)} / span ${getGridRowSpan(item)}`}
						>
							<a
								href="#"
								class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
							>
								<p class="order-1 font-semibold text-blue-700">{item.title}</p>
								<p class="order-1 text-blue-500 group-hover:text-blue-700">
									{item.description}
								</p>
								<p class="text-blue-500 group-hover:text-blue-700">
									<time datetime={item.date.toLocaleString()}
										>{item.date.toLocaleTimeString().substring(0, 5)}</time
									>
								</p>
							</a>
						</li>
					{/each}
					<!-- <li class="relative mt-px flex" style="grid-row: 92 / span 30">
						<a
							href="#"
							class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
						>
							<p class="order-1 font-semibold text-pink-700">Flight to Paris</p>
							<p class="order-1 text-pink-500 group-hover:text-pink-700">
								John F. Kennedy International Airport
							</p>
							<p class="text-pink-500 group-hover:text-pink-700">
								<time datetime="2022-01-22T07:30">7:30 AM</time>
							</p>
						</a>
					</li>
					<li class="relative mt-px flex" style="grid-row: 134 / span 18">
						<a
							href="#"
							class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
						>
							<p class="order-1 font-semibold text-indigo-700">Sightseeing</p>
							<p class="order-1 text-indigo-500 group-hover:text-indigo-700">Eiffel Tower</p>
							<p class="text-indigo-500 group-hover:text-indigo-700">
								<time datetime="2022-01-22T11:00">11:00 AM</time>
							</p>
						</a>
					</li> -->
				</ol>
			</div>
		</div>
	</div>
</div>
