<script setup lang="ts">
	import { Ref, ref } from 'vue'
	import { useStore } from '../store/Store'
	import { Quote } from '../types/Quote'

	const store = useStore()
	const quote: Ref<Quote> = ref()

	quote.value = store.quote
	store.$subscribe(() => {
		quote.value = store.quote
	})

	const handleClick = async () => {
		await store.useGetQuote()
	}
</script>

<template>
	<div v-if="quote">
		{{ quote.en }}
		{{ quote.author }}
		<button @click="handleClick">new</button>
	</div>
</template>
