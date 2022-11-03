<template>
	<article :class="[isSunUp ? 'light' : 'dark']">
		<div class="stats-container">
			<div class="stat">
				<p>Current timezone</p>
				<p>{{ formatedLocation }}</p>
			</div>
			<div class="stat">
				<p>Day of the year</p>
				<p>{{ location.day_of_year }}</p>
			</div>
			<div class="stat">
				<p>Day of the week</p>
				<p>{{ location.day_of_week }}</p>
			</div>
			<div class="stat">
				<p>Week number</p>
				<p>{{ location.week_number }}</p>
			</div>
		</div>
	</article>
</template>

<script setup>
	import { useStore } from '../store/Store'
	const store = useStore()
	const location = store.location

	let isSunUp = inject('isSunUp')

	const formatedLocation = computed(() => location.timezone.replace('_', ' '))
</script>

<style scoped>
	article {
		display: grid;
		width: 100%;
	}

	.dark {
		color: #fff;
		background-color: rgba(0, 0, 0, 0.75);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
	}
	.light {
		color: #000;
		background-color: rgba(255, 255, 255, 0.75);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
	}

	.stats-container {
		margin-block: auto;
		padding: 1rem;
		max-width: 1110px;
		margin-inline: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		height: 100%;
		justify-content: center;
	}

	.stat {
		display: flex;
		justify-content: space-between;
	}
	.stat p:first-of-type {
		font-weight: 400;
		font-size: 10px;
		line-height: 28px;
		letter-spacing: 2px;
		text-transform: uppercase;
		flex: 1;
		white-space: nowrap;
	}
	.stat p:nth-of-type(2) {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		text-transform: uppercase;
		flex: 1;
		text-align: right;
		white-space: nowrap;
	}

	@media (min-width: 376px) {
		.stats-container {
			padding-inline: 4rem;
		}
	}
	@media (min-width: 768px) {
		.stats-container {
			padding-inline: 4rem;
		}
	}
</style>
