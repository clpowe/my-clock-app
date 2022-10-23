<script setup lang="ts">
	import getQuote from '../composables/getQuote'

	const quote = await getQuote()
</script>

<template>
	{{ quote }}
</template>
