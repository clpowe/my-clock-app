<template>
	<div>{{ greeting }}, IT’S CURRENTLY</div>
	<div>{{ hour }}:{{ minute }} {{ location.code }}</div>
	<div>{{ location.city }}, {{ location.country }}</div>
</template>

<script setup lang="ts">
	import { Ref, ref, watch } from 'vue'
	import { getGreeting } from '../composables/getGreeting'
	import { useStore } from '../store/Store'
	const store = useStore()
	const location = store.location

	let hour: Ref<string> = ref('')
	let minute: Ref<string> = ref('')
	let hourOfDay: Ref<number> = ref(1)
	const greeting: Ref<string> = ref('')

	const setTime = () => {
		let date = new Date()
		const options = {
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

	greeting.value = getGreeting(hourOfDay.value)

	watch(hourOfDay, (hourOfDay) => {
		greeting.value = getGreeting(hourOfDay)
	})

	// watch(greeting, (geeting, prevGreeting) => {
	// 	if (prevGreeting === 'Good Night') {
	// 		getQuote()
	// 	}
	// 	if (prevGreeting === 'Good afternoon') {
	// 		getQuote()
	// 	}
	// })
</script>

<style lang="scss" scoped></style>
