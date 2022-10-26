<script setup lang="ts">
	import { useStore } from '../store/Store'
	const store = useStore()
	await store.useGetQuote()
	await store.fill()

	const isShown = ref(false)

	const showHide = () => {
		isShown.value = !isShown.value
	}
</script>

<template>
	<main class="sunUp">
		<div class="content" :class="{ show: isShown }">
			<Quote />
			<Time @show-hide="showHide" />
		</div>
		<Stats />
	</main>
</template>

<style scoped>
	:root {
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1440px;
		overflow: hidden;
		margin: auto;
		padding-top: 2rem;
		padding-inline: 1.5rem;
		padding-bottom: 2.5rem;
		transform: translateY(0px);
		transition: all 0.5s cubic-bezier(0.53, 0, 0.51, 1);
	}

	.sunUp {
		background: linear-gradient(var(--overlay), var(--overlay)),
			url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_uZfG1aY4Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749472);
		background-size: cover;
		background-repeat: no-repeat;

		/* Set up proportionate scaling */
		width: 100%;
	}

	.show {
		transform: translateY(-334px);
	}

	@media (min-width: 376px) {
		.sunUp {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_2__cx2t84I9t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749991);
		}
	}
	@media (min-width: 768px) {
		.sunUp {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_1__uNgHNvvCgC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750025);
		}
	}
</style>
