<template>
	<Clock />
</template>
<script setup>
	import Clock from './components/Clock.vue'
	import { provide, ref, onMounted } from 'vue'

	import { getData } from './composables/getData'

	let location = ref()

	const loadData = async () => {
		location.value = await getData()
	}

	onMounted(() => {
		loadData()
	})

	provide('location', location)
</script>

<style scoped></style>
