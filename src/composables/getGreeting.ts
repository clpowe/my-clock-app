import { inRange } from 'lodash'

export const getGreeting = (hourOfDay: number): string => {
	let greeting = ''
	if (inRange(hourOfDay, 5, 12)) {
		greeting = 'Good morning'
	} else if (inRange(hourOfDay, 13, 18)) {
		greeting = 'Good afternoon'
	} else {
		greeting = 'Good evening'
	}

	return greeting
}
