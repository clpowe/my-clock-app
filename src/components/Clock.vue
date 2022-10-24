<script setup lang="ts">
	import { useStore } from '../store/Store'
	const store = useStore()
	await store.useGetQuote()
	await store.fill()
</script>

<template>
	<div class="grid grid-rows-3 h-[150vh]">
		<Quote />
		<Time />
		<Stats />
	</div>
</template>
