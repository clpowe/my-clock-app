<template>
	<Suspense>
		<template #default>
			<Clock />
		</template>
		<template #fallback> App... </template>
	</Suspense>
</template>
<script setup lang="ts"></script>

<style scoped></style>
