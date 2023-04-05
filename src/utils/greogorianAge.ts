// https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
export default function greogorianAge(date) {
	var today = new Date()
	var birthDate = new Date(date)
	var age = today.getFullYear() - birthDate.getFullYear()
	var m = today.getMonth() - birthDate.getMonth()
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--
	}
	return age
}
