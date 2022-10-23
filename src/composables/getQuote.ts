import { ref } from 'vue'
import { Quote } from '../types/Quote'

export const getQuote = async (): Promise<Quote | null> => {
	let quote = ref(null)
	try {
		const responce = await fetch(
			'https://programming-quotes-api.herokuapp.com/Quotes/random'
		)
		if (responce.ok) {
			quote.value = await responce.json()
		}
	} catch (error) {
		console.error(error)
	}
	return quote.value
}
