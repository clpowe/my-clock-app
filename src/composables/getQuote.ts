import { Quote } from '../types/Quote'

export const getQuote = async (): Promise<Quote> => {
	let quote
	try {
		const responce = await fetch(
			'https://programming-quotes-api.herokuapp.com/Quotes/random'
		)
		if (responce.ok) {
			quote = await responce.json()
		}
	} catch (error) {
		console.error(error)
	}
	return quote
}
