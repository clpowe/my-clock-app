<template>
	<Suspense>
		<template #default>
			<Clock />
		</template>
		<template #fallback> App... </template>
	</Suspense>
</template>
<script setup lang="ts">
	import Clock from './components/Clock.vue'
</script>

<style scoped></style>
