<template>
	<div>
		<Suspense>
			<template #default>
				<Clock />
			</template>
			<template #fallback> App... </template>
		</Suspense>
	</div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
