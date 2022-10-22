<script setup>
	import { useLocationStore } from './store/LocationStore'
	const locationStore = useLocationStore()

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
</script>

<template></template>
