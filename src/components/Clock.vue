<script setup>
	import { ref, watch, inject } from 'vue'

	let myhour = ref('')
	let myminute = ref('')
	let hourOfDay = ref(1)
	const quote = ref()

	const location = inject('location')

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
		myhour.value = clock[0].value
		myminute.value = clock[2].value
	}

	const greeting = ref('Good evening')
	setTime()

	// get random quote

	const getQuote = async () => {
		try {
			const responce = await fetch(
				'https://programming-quotes-api.herokuapp.com/Quotes/random'
			)

			if (responce.ok) {
				quote.value = await responce.json()
				console.log(quote.value)
			}
		} catch (error) {
			console.error(error)
		}
	}

	getQuote()

	watch(hourOfDay, () => {
		if (hourOfDay.value >= 5 && hourOfDay.value <= 12) {
			greeting.value = 'Good morning'
		} else if (hourOfDay.value > 12 && hourOfDay.value <= 18) {
			greeting.value = 'Good afternoon'
		} else {
			greeting.value = 'Good evening'
		}
	})

	watch(greeting, (geeting, prevGreeting) => {
		if (prevGreeting === 'Good Night') {
			getQuote()
		}
		if (prevGreeting === 'Good afternoon') {
			getQuote()
		}
	})
</script>

<template>
	<div v-if="location">
		<div v-if="quote">
			{{ quote.en }}
			{{ quote.author }}
		</div>

		<div>{{ greeting }}, IT’S CURRENTLY</div>
		<div>{{ myhour }}:{{ myminute }}{{ location.code }}</div>
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
		</div>
	</div>
</template>
