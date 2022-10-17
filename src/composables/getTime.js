export const getLocalTime = async (ip) => {
	try {
		const responce = await fetch(`https://worldtimeapi.org/api/ip/${ip}`)
		const data = await responce.json()

		return {
			day_of_week: data.day_of_week,
			day_of_year: data.day_of_year,
			week_number: data.week_number
		}
	} catch (error) {
		console.log(error)
	}
}
