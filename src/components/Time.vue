<template>
	<article class="time">
		<div class="time-content">
			<div class="message text-100 uppercase">
				<Sun v-if="isSunUp" />
				<Moon v-else />
				<p>{{ greeting }}</p>
				<p class="formal">, IT’S CURRENTLY</p>
			</div>
			<div class="clock">
				<p class="text-600 bold">{{ hour }}:{{ minute }}</p>
				<p class="text-100">{{ location.code }}</p>
			</div>
			<p class="city text-300 bold">
				{{ location.city }}, {{ location.country }}
			</p>
		</div>
		<MyButton @show-hide="$emit('showHide')" />
	</article>
</template>

<script setup lang="ts">
	import { inject } from 'vue'
	import { useStore } from '../store/Store'

	const store = useStore()
	const location = store.location

	let isSunUp = inject('isSunUp')

	const greeting = inject('greeting')
	const hour = inject('hour')
	const minute = inject('minute')
</script>

<style scoped>
	.time {
		width: 100%;
		display: flex;
		color: var(--white);
		flex-direction: column;
		gap: 1rem;
		justify-content: flex-end;
		padding-inline: 1rem;
		padding-bottom: 2.5rem;
		max-width: 1110px;
		margin-inline: auto;
	}

	.time-content {
	}

	.message {
		display: flex;
	}

	.formal {
		display: none;
	}

	.clock {
		display: inline-flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.city {
		margin-bottom: 3rem;
	}

	@media (min-width: 376px) {
		.formal {
			display: block;
		}
		.time {
			padding-inline: 1rem;
		}
	}
	@media (min-width: 768px) {
		.city {
			margin-bottom: 0rem;
		}
		.time {
			flex-direction: row;

			justify-content: space-between;
			align-items: flex-end;
		}
	}
</style>
