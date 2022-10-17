import { getLocationByIP } from './getLocation'
import { getLocalTime } from './getTime'

export const getData = async () => {
	const location = await getLocationByIP()
	const time = await getLocalTime(location.ip)

	return {
		...location,
		...time
	}
}
