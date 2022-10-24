<template>
	<div>
		<div>{{ greeting }}, IT’S CURRENTLY</div>
		<div>{{ hour }}:{{ minute }} {{ location.code }}</div>
		<div>{{ location.city }}, {{ location.country }}</div>
		<button>More</button>
	</div>
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

<style lang="scss" scoped></style>
