<script setup lang="ts">
	import { computed, ref } from 'vue'
	let myhour = ref('')
	let myminute = ref('')
	let hourOfDay = ref(1)

	// get lat long
	const getLocationByIP = async () => {
		try {
			const responce = await fetch(
				`https://api.ipbase.com/v2/info?apikey=${
					import.meta.env.VITE_IPBASE_API_KEY
				}&language=en`
			)
			const data = await responce.json()

			return {
				ip: data.data.ip,
				timezone: data.data.timezone.id,
				code: data.data.timezone.code,
				city: data.data.location.city.name,
				country: data.data.location.country.alpha2
			}
		} catch (error) {
			console.log(error)
		}
	}

	const location = await getLocationByIP()
	console.log(location)
	// get location date time

	const getLocalTime = async (ip) => {
		try {
			const responce = await fetch(`https://worldtimeapi.org/api/ip/${ip}`)
			const data = await responce.json()
			console.log(data)
			return {
				day_of_week: data.day_of_week,
				day_of_year: data.day_of_year,
				week_number: data.week_number
			}
		} catch (error) {
			console.log(error)
		}
	}

	const localTime = await getLocalTime(location.ip)

	console.log(localTime)

	// run clock

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

	const greeting = computed(() => {
		if (hourOfDay.value >= 5 && hourOfDay.value <= 12) {
			return 'Good morning'
		} else if (hourOfDay.value > 12 && hourOfDay.value <= 18) {
			return 'Good afternoon'
		} else {
			return 'Good evening'
		}
	})
	setTime()
</script>

<template>
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
			<p>{{ localTime.day_of_year }}</p>
		</div>
		<div>
			<p>Day of the week</p>
			<p>{{ localTime.day_of_week }}</p>
		</div>
		<div>
			<p>Week number</p>
			<p>{{ localTime.week_number }}</p>
		</div>
	</div>
</template>
