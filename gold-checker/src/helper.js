export function safeParseFloatStrict (str) {
  if (typeof str !== 'string') {
    return -1;
  }

  let trimmedStr = str.trim().replace(/\s/g, '');

  if (trimmedStr === '') {
    return -1;
  }

  let cleanString = trimmedStr.replace(/\./g, '');
  cleanString = cleanString.replace(',', '.');

  const parsedValue = Number(cleanString);

  if (isNaN(parsedValue) || !isFinite(parsedValue)) {
    return -1;
  }

  return parsedValue;
}
