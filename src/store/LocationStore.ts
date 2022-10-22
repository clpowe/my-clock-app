import { defineStore } from 'pinia'
import { getData } from '../composables/getData'
import { Location } from '../types/Location'

export const useLocationStore = defineStore('LocationStore', {
	state: () => {
		return {
			quote: '',
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
	actions: {
		async fill(): Promise<Location | void> {
			try {
				this.location = await getData()
			} catch (error) {
				console.error(error)
			}
		}
	}
})
