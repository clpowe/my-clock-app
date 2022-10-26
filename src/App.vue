<template>
	<main class="h-screen overflow-hidden">
		<Suspense>
			<template #default>
				<Clock />
			</template>
			<template #fallback> Loading... </template>
		</Suspense>
		<!-- <picture v-if="sunUp">
			<source
				srcset="
					https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_1__uNgHNvvCgC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750025
				"
				media="(min-width: 760px)"
			/>
			<source
				srcset="
					https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_2__cx2t84I9t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749991
				"
				media="(min-width: 376px)"
			/>
			<img
				src="https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_uZfG1aY4Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749472"
				alt=""
				class="absolute top-0 left-0 h-full w-full object-cover"
			/>
		</picture>
		<picture v-else>
			<source
				srcset="
					https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_1__-o2E3GA-h7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749917
				"
				media="(min-width: 769px)"
			/>
			<source
				srcset="
					https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_2__NRPnIFdSM_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750018
				"
				media="(min-width: 376px)"
			/>
			<img
				src="https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_x05w5GWQz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749470"
				alt=""
				class="absolute top-0 left-0 h-full w-full object-cover"
			/>
		</picture> -->
	</main>
</template>
<script setup lang="ts">
	import { computed, Ref, ref, watch, provide } from 'vue'
	import { getGreeting } from './composables/getGreeting'
	import { inRange } from 'lodash'

	let hour: Ref<string> = ref('')
	let minute: Ref<string> = ref('')
	let hourOfDay: Ref<number> = ref(1)
	let sunUp: Ref<boolean> = ref(true)

	const setTime = () => {
		let date = new Date()
		const options: Intl.DateTimeFormatOptions = {
			hour: 'numeric',
			minute: 'numeric'
		}
		const clock = new Intl.DateTimeFormat('en-US', options).formatToParts(date)
		setTimeout(setTime, 1000)
		hourOfDay.value = parseInt(
			date.toLocaleString('en-US', {
				hour: '2-digit',
				hour12: false
			})
		)
		hour.value = clock[0].value
		minute.value = clock[2].value
	}
	setTime()

	const greeting: Ref<string> = ref('')

	greeting.value = getGreeting(hourOfDay.value)

	if (hourOfDay.value) {
		watch(hourOfDay, (hourOfDay) => {
			greeting.value = getGreeting(hourOfDay)
		})

		sunUp = computed((hourOfDay) => {
			const result = inRange(hourOfDay, 5, 18)
			return result
		})
	}

	const showHide = () => {
		console.log('Show Hide')
	}

	provide('sunUp', sunUp)
	provide('hour', hour)
	provide('minute', minute)
	provide('greeting', greeting)
</script>

<style scoped>
	main {
		background-color: black;
		display: flex;
	}
</style>
