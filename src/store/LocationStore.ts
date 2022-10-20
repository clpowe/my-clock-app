import { defineStore } from 'pinia'
import { getData } from '../composables/getData'

type Location = {
	ip: string
	timezone: string
	code: string
	city: string
	country: string
	day_of_week: string
	day_of_year: string
	week_number: string
}

export const useLocationStore = defineStore('LocationStore', {
	state: () => {
		return {
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
		async getLocation() {
			try {
				this.location = await getData()
			} catch (error) {
				console.error(error)
			}
		}
	}
})
