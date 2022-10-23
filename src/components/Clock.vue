<script setup lang="ts">
	import { computed, Ref, ref, watch } from 'vue'
	import { getGreeting } from '../composables/getGreeting'
	import { useStore } from '../store/Store'
	import { inRange } from 'lodash'

	const store = useStore()

	await store.useGetQuote()
	await store.fill()

	let hour: Ref<string> = ref('')
	let minute: Ref<string> = ref('')
	let hourOfDay: Ref<number> = ref(1)

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

	watch(hourOfDay, (hourOfDay) => {
		greeting.value = getGreeting(hourOfDay)
	})

	const sunUp = computed((hourOfDay) => {
		return inRange(hourOfDay, 5, 18)
	})
</script>

<template>
	<Quote />
	<Time :greeting="greeting" :hour="hour" :minute="minute" />
	<Stats />

	<picture v-if="sunUp">
		<source
			srcset="
				https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_1__uNgHNvvCgC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750025
			"
			media="(min-width: 768px)"
		/>
		<source
			srcset="
				https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_2__cx2t84I9t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749991
			"
			media="(min-width: 375px)"
		/>
		<img
			src="https://ik.imagekit.io/cpds/ClockApp/bg-image-daytime_uZfG1aY4Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749472"
			alt=""
		/>
	</picture>
	<picture v-else>
		<source
			srcset="
				https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_1__-o2E3GA-h7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749917
			"
			media="(min-width: 768px)"
		/>
		<source
			srcset="
				https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_2__NRPnIFdSM_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492750018
			"
			media="(min-width: 375px)"
		/>
		<img
			src="https://ik.imagekit.io/cpds/ClockApp/bg-image-nighttime_x05w5GWQz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666492749470"
			alt=""
		/>
	</picture>
</template>
