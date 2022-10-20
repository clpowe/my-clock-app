type Stats = {
	day_of_week: string
	day_of_year: string
	week_number: string
}

export const getStats = async (ip: string) => {
	try {
		const responce = await fetch(`https://worldtimeapi.org/api/ip/${ip}`)
		const data = await responce.json()

		return {
			day_of_week: data.day_of_week,
			day_of_year: data.day_of_year,
			week_number: data.week_number
		} as Stats
	} catch (error) {
		console.log(error)
	}
}
