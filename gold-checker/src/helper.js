export function safeParseFloatStrict (str) {
  if (typeof str !== 'string') {
    return -1
  }

  let trimmedStr = str.trim().replace(/\s/g, '')

  if (trimmedStr === '') {
    return -1
  }

  let cleanString = trimmedStr.replace(/\./g, '')
  cleanString = cleanString.replace(',', '.')

  const parsedValue = Number(cleanString)

  if (isNaN(parsedValue) || !isFinite(parsedValue)) {
    return -1
  }

  return parsedValue
}

export function FormatNumber (num) {
  const number = typeof num === 'string' ? parseFloat(num) : num

  if (isNaN(number) || number === null || number === undefined) {
    return ''
  }

  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number)
}
