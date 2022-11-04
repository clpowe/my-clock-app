<script setup lang="ts">
	import { Ref, ref } from 'vue'
	import { useStore } from '../store/Store'
	import { Quote } from '../types/Quote'

	const store = useStore()
	const quote: Ref<Quote | any> = ref()

	quote.value = store.quote
	store.$subscribe(() => {
		quote.value = store.quote
	})

	const handleClick = async () => {
		await store.useGetQuote()
	}
</script>

<template>
	<div v-if="quote" class="quote">
		<div>
			<p class="body">"{{ quote.en }}"</p>
			<p class="body bold author">
				{{ quote.author }}
			</p>
		</div>
		<button @click="handleClick">
			<svg
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="fill-white"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13 4.76457L10.6884 6.97749C10.6287 7.03702 10.6107 7.12666 10.6429 7.20457C10.6752 7.28248 10.7511 7.3333 10.8354 7.33332H17.3334V1.10416C17.3328 1.02008 17.2818 0.944558 17.204 0.912674C17.1262 0.88079 17.0369 0.898794 16.9775 0.958322L14.8046 3.03707C12.7334 1.0125 9.75831 0.210711 6.9502 0.920285C4.14209 1.62986 1.90505 3.74867 1.04419 6.51416L3.43085 7.25999C4.02898 5.3392 5.57591 3.863 7.52257 3.35536C9.46924 2.84771 11.5401 3.38049 13 4.76457ZM7.38031 10.7951C7.34804 10.7174 7.27213 10.6667 7.18794 10.6667H0.666687V16.8154C0.666705 16.8997 0.717527 16.9757 0.795437 17.0079C0.873346 17.0401 0.962985 17.0222 1.02252 16.9625L3.17085 14.9408C5.23884 16.977 8.2182 17.7889 11.0333 17.0833C13.8484 16.3778 16.0927 14.2567 16.9559 11.4858L14.5692 10.74C13.9702 12.6626 12.4208 14.1396 10.4717 14.6459C8.52258 15.1522 6.45022 14.616 4.99127 13.2279L7.33544 11.0221C7.39488 10.9624 7.41259 10.8729 7.38031 10.7951Z"
					fill="inherit"
				/>
			</svg>
		</button>
	</div>
</template>

<style scoped>
	.quote {
		display: flex;
		color: var(--white);
		max-width: 1440px;
		margin-inline: auto;
		width: 100%;
		flex-direction: row;
		align-items: start;
		gap: 1rem;
		padding-top: 2rem;
		padding-inline: 1rem;
		justify-content: space-between;
	}

	button {
		background: none;
		margin-top: 0.25rem;
		flex-shrink: 0;
	}

	svg {
		fill: var(--white);
		opacity: 0.5;
		height: 1rem;
		width: 1rem;
	}
	svg:hover {
		fill: var(--white);
		opacity: 1;
	}

	.author {
		margin-top: 0.5rem;
	}

	@media (min-width: 425px) {
		.quote {
			padding-inline: 5%;
		}
	}

	@media (min-width: 768px) {
		.quote {
			justify-content: flex-start;
		}
	}
</style>
