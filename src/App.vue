<script setup>
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

			return {
				datetime: data.datetime,
				day_of_week: data.day_of_week,
				day_of_year: data.day_of_year
			}
		} catch (error) {
			console.log(error)
		}
	}

	const localTime = await getLocalTime(location.ip)

	console.log(localTime)

	// run clock
</script>

<template>
	<div></div>
</template>

<style scoped></style>
