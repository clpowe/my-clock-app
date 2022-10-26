<template>
	<article class="time">
		<div class="message text-100 uppercase">
			<Sun />
			<p>{{ greeting }}</p>
			<p class="formal">, IT’S CURRENTLY</p>
		</div>
		<div class="clock">
			<p class="text-600 bold">{{ hour }}:{{ minute }}</p>
			<p class="text-100">{{ location.code }}</p>
		</div>
		<p class="text-300 bold">{{ location.city }}, {{ location.country }}</p>
		<MyButton @show-hide="$emit('showHide')" />
	</article>
</template>

<script setup lang="ts">
	import { inject } from 'vue'
	import { useStore } from '../store/Store'

	const store = useStore()
	const location = store.location

	const greeting = inject('greeting')
	const hour = inject('hour')
	const minute = inject('minute')
</script>

<style scoped>
	.time {
		min-height: 334px;
		width: 100%;
		display: flex;
		color: var(--white);
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 40px;
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

	@media (min-width: 376px) {
		.formal {
			display: block;
		}
	}
</style>
