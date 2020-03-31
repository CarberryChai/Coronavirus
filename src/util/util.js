export function formatDate(dataStr) {
  const date = new Date(dataStr)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()
  const hour = date.getHours()
  const mins = date.getMinutes()
  const sec = date.getSeconds()
  return `${year} ${month} ${day} ${hour}-${mins}-${sec}`
}
