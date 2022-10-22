import { getLocationByIP } from './getLocation'
import { getStats } from './getStats'
import { Location } from '../types/Location'

export const getData = async (): Promise<Location> => {
	let location
	let time

	try {
		location = await getLocationByIP()
		if (!location) {
			throw new Error(`Could not get location by IP`)
		}
		if (location.ip) time = await getStats(location.ip)
	} catch (error) {
		console.error(error)
	}
	console.log('data', 'done')
	return {
		...location,
		...time
	} as Location
}
