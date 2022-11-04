<script setup lang="ts">
	import { ref, inject } from 'vue'
	import { useStore } from '../store/Store'
	const store = useStore()
	await store.useGetQuote()
	await store.fill()

	const isShown = ref(false)
	let isSunUp = inject('isSunUp')

	const showHide = () => {
		isShown.value = !isShown.value
	}
</script>

<template>
	<main :class="[isSunUp ? 'sunUp' : 'sunDown']">
		<div class="content" :class="{ show: isShown }">
			<Quote />
			<Time @show-hide="showHide" />
			<Stats class="stats" :class="{ show2: isShown }" />
		</div>
	</main>
</template>

<style scoped>
	:root {
	}

	.content {
		position: absolute;

		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 100%;

		height: 150vh;
		margin: auto;
		top: 0;

		z-index: 5;

		transform: translateY(0px);
		transition: all 0.5s cubic-bezier(0.53, 0, 0.51, 1);
	}

	.content > * {
		flex-basis: 50%;
	}

	.sunUp {
		position: relative;
		background: linear-gradient(var(--overlay), var(--overlay)),
			url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_uZfG1aY4Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749472);
		background-size: cover;
		background-repeat: no-repeat;
		overflow: hidden;
		display: flex;
		justify-content: center;

		/* Set up proportionate scaling */
		height: 100vh;
	}
	.sunDown {
		position: relative;
		background: linear-gradient(var(--overlay), var(--overlay)),
			url(https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_x05w5GWQz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749470);
		background-size: cover;
		background-repeat: no-repeat;
		overflow: hidden;
		display: flex;
		justify-content: center;

		/* Set up proportionate scaling */
		height: 100vh;
	}

	.show {
		top: -50%;
	}

	@media (min-width: 425px) {
		.sunUp {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_2__cx2t84I9t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749991);
			background-size: cover;
			background-repeat: no-repeat;
		}
		.sunDown {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_2__NRPnIFdSM_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750018);
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
	@media (min-width: 768px) {
		.sunUp {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_1__uNgHNvvCgC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750025);
			background-size: cover;
			background-repeat: no-repeat;
		}
		.sunDown {
			background: linear-gradient(var(--overlay), var(--overlay)),
				url(https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_1__-o2E3GA-h7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749917);
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
</style>
