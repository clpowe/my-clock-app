<template>
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
</template>

<script setup>
	import { useLocationStore } from '../store/LocationStore'

	const locationStore = useLocationStore()

	const location = locationStore.location
</script>

<style lang="scss" scoped></style>
