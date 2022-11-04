<template>
	<button @click="handleclick">
		<span class="text">{{ isFlipped ? 'LESS' : 'MORE' }}</span>
		<div class="chevron" :class="{ flip: isFlipped }">
			<Chevron />
		</div>
	</button>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const emit = defineEmits(['showHide'])

	const isFlipped = ref(false)
	let handleclick = () => {
		isFlipped.value = !isFlipped.value
		emit('showHide')
	}
</script>

<style scoped>
	button {
		width: 115px;
		height: 40px;
		display: flex;
		border-radius: 500px;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		color: var(--black);
		font-weight: 700;
		font-size: 12px;
		line-height: 14px;
		text-transform: capitalize;
		opacity: 0.5;
		margin-left: 0.5rem;
		letter-spacing: 3.75px;
	}
	.chevron {
		display: grid;
		place-content: center;
		background: var(--black);
		border-radius: 50%;
		rotate: 180deg;
		width: 2rem;
		height: 2rem;
		transition: rotate 0.5s ease;
	}

	.flip {
		rotate: 0deg;
	}
</style>
