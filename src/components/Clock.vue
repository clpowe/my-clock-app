<script setup lang="ts">
	import { useStore } from '../store/Store'

	const store = useStore()

	await store.fill()
	const location = store.location

	// const greeting = ref('Good evening')
	// // get random quote

	// const getQuote = async () => {
	// 	try {
	// 		const responce = await fetch(
	// 			'https://programming-quotes-api.herokuapp.com/Quotes/random'
	// 		)

	// 		if (responce.ok) {
	// 			quote.value = await responce.json()
	// 			console.log(quote.value)
	// 		}
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }

	// getQuote()

	// console.log(quote.value)
	// watch(hourOfDay, () => {
	// 	if (hourOfDay.value >= 5 && hourOfDay.value <= 12) {
	// 		greeting.value = 'Good morning'
	// 	} else if (hourOfDay.value > 12 && hourOfDay.value <= 18) {
	// 		greeting.value = 'Good afternoon'
	// 	} else {
	// 		greeting.value = 'Good evening'
	// 	}
	// })

	// watch(greeting, (geeting, prevGreeting) => {
	// 	if (prevGreeting === 'Good Night') {
	// 		getQuote()
	// 	}
	// 	if (prevGreeting === 'Good afternoon') {
	// 		getQuote()
	// 	}
	// })
</script>

<template>
	<Time />

	<Quote />
	<!-- <Stats /> -->
	<!--
		<div v-if="quote">
			{{ quote.en }}
			{{ quote.author }}
		</div>

		<div>{{ greeting }}, IT’S CURRENTLY</div>
		<div>{{ hour }}:{{ minute }}{{ location.code }}</div>
		<div>in {{ location.city }},{{ location.country }}</div>
		<div>
			<div>
				<p>Current timezone</p>
				<p>{{ location.timezone }}</p>
			</div>
			<div>
				<p>Day of the year</p>
				<p>{{ location.day_of_year }}</p>
			</div>
			<div>
				<p>Day of the week</p>
				<p>{{ location.day_of_week }}</p>
			</div>
			<div>
				<p>Week number</p>
				<p>{{ location.week_number }}</p>
			</div>
		</div> -->
</template>
