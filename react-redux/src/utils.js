
export function getHashValues(hash) {
  return Object.values(hash) // needs modern browser
}

export function hashById(array) {
  let hash = {}

  for (let item of array) {
    hash[item.id] = item
  }

  return hash
}

export function excludeById(array, id) {
  return array.filter((item) => item.id !== id)
}

export function getTodayStr() {
  return new Date().toISOString().replace(/T.*$/, '')
}

export function getMultipleDate (days){
  var result = new Date();
	result.setDate(result.getDate() + days);
	return result.toISOString().replace(/T.*$/, '');
}
