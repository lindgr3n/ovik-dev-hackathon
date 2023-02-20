<script lang="ts">
</script>

<span class="highlight-container"><span class="highlight"><slot /></span></span>

<style>
	/* Could do this the tailwind way https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements */
	.highlight-container,
	.highlight {
		position: relative;
	}
	.highlight-container {
		display: inline-block;
	}
	.highlight-container:before {
		content: ' ';
		display: block;
		height: 100%;
		width: 100%;
		margin-left: -3px;
		margin-right: -3px;
		position: absolute;
		background: #ffd500;
		transform: rotate(2deg);
		top: -1px;
		left: -1px;
		border-radius: 20% 25% 20% 24%;
		padding: 10px 3px 3px 10px;
	}
</style>
