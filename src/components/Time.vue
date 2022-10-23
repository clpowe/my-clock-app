<template>
	<div>{{ greeting }}, IT’S CURRENTLY</div>
	<div>{{ hour }}:{{ minute }} {{ location.code }}</div>
	<div>{{ location.city }}, {{ location.country }}</div>
	<button>More</button>
</template>

<script setup lang="ts">
	import { useStore } from '../store/Store'

	const store = useStore()
	const location = store.location

	const props = defineProps({
		greeting: String,
		hour: String,
		minute: String
	})
</script>

<style lang="scss" scoped></style>
