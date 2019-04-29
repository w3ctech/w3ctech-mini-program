export function numberFormatter (number) {
  const str = number + ''
  return str[1] ? str : `0${str}`
}

export function timeFormatter (date) {
  const yearMonthDay = (
    ['getFullYear', 'getMonth', 'getDate']
      .map(field => date[field]() + (field === 'getMonth'))
      .map(numberFormatter)
      .join('/')
  )
  const hourMinuteSecond = (
    ['hour', 'minute', 'second']
      .map(field => date[field]())
      .map(numberFormatter)
      .join(':')
  )

  return `${yearMonthDay} ${hourMinuteSecond}`
}
