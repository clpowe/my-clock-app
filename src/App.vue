<template>
	<main class="h-screen overflow-hidden">
		<Suspense>
			<template #default>
				<Clock />
			</template>
			<template #fallback> <Loader /> </template>
		</Suspense>
	</main>
</template>
<script setup lang="ts">
	import { computed, Ref, ref, watch, provide } from 'vue'
	import { getGreeting } from './composables/getGreeting'
	import { inRange } from 'lodash'

	let hour: Ref<string> = ref('')
	let minute: Ref<string> = ref('')
	let hourOfDay: Ref<number> = ref(1)
	let isSunUp: Ref<boolean> = ref(true)

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

		isSunUp.value = inRange(hourOfDay.value, 5, 18)
	}

	provide('isSunUp', isSunUp)
	provide('hour', hour)
	provide('minute', minute)
	provide('greeting', greeting)
</script>

<style scoped></style>
