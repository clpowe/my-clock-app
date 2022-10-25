<script setup lang="ts">
	import { useStore } from '../store/Store'
	const store = useStore()
	await store.useGetQuote()
	await store.fill()
</script>

<template>
	<main class="sunUp">
		<Quote />
		<Time />
		<Stats />
	</main>
</template>

<style scoped>
	:root {
	}

	main {
		display: flex;
		flex-direction: column;
		max-width: 1440px;
		overflow: hidden;
		margin: auto;
		padding-top: 2rem;
		padding-inline: 1.5rem;
		padding-bottom: 2.5rem;
	}

	.sunUp {
		background: linear-gradient(var(--overlay), var(--overlay)),
			url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_uZfG1aY4Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749472);
		background-size: cover;

		height: 667px;

		/* Set up proportionate scaling */
		width: 100%;
	}

	@media (min-width: 376px) {
		.sunUp {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_2__cx2t84I9t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749991);

			height: 1024px;
		}
	}
	@media (min-width: 768px) {
		.sunUp {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_1__uNgHNvvCgC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750025);

			height: 800px;
		}
	}
</style>
