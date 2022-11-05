export default function greogorianAge() {
  const birthDateTime = new Date("September 24, 2001")
  const currentTime = new Date()

  let dayDifference = currentTime.getDate() - birthDateTime.getDate()
  let monthDifference = currentTime.getMonth() - birthDateTime.getMonth()
  let yearDifference = currentTime.getFullYear() - birthDateTime.getFullYear()

  return yearDifference - (monthDifference < 0 || dayDifference < 0 ? 1 : 0)
}
