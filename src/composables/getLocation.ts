type IPData = {
	ip: string
	timezone: string
	code: string
	city: string
	country: string
}

export const getLocationByIP = async () => {
	try {
		const responce = await fetch(
			`https://api.ipbase.com/v2/info?apikey=${
				import.meta.env.VITE_IPBASE_API_KEY
			}&language=en`
		)
		const data = await responce.json()
		console.log('location', 'done')
		return {
			ip: data.data.ip,
			timezone: data.data.timezone.id,
			code: data.data.timezone.code,
			city: data.data.location.city.name,
			country: data.data.location.country.alpha2
		} as IPData
	} catch (error) {
		console.log(error)
	}
}
