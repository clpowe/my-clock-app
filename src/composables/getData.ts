import { getLocationByIP } from './getLocation'
import { getStats } from './getStats'

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

export const getData = async (): Promise<Location> => {
	let location
	let time

	try {
		location = await getLocationByIP()
		if (!location) {
			throw new Error(`Could not get location by IP`)
		}
		time = await getStats(location.ip)
	} catch (error) {
		console.error(error)
	}

	return {
		...location,
		...time
	} as Location
}
