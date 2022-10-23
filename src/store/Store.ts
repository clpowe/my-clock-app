import { Quote } from './../types/Quote'
import { defineStore } from 'pinia'
import { getData } from '../composables/getData'
import { Location } from '../types/Location'
import { getQuote } from '../composables/getQuote'

export const useStore = defineStore('store', {
	state: () => {
		return {
			quote: {} as Quote | any,
			location: {
				ip: '',
				timezone: '',
				code: '',
				city: '',
				country: '',
				day_of_week: '',
				day_of_year: '',
				week_number: ''
			} as Location
		}
	},
	getters: {
		timeOfDay: (state) => {}
	},
	actions: {
		async fill(): Promise<Location | any> {
			try {
				this.location = await getData()
			} catch (error) {
				console.error(error)
			}
		},

		async useGetQuote(): Promise<Quote | any> {
			this.quote = await getQuote()
		}
	}
})
