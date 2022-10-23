import { ref } from 'vue'
import { Quote } from '../types/Quote'

export const getQuote = async (): Promise<Quote | any> => {
	let quote = ref()
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
	if (quote.value != null) {
		return quote.value
	}
}
