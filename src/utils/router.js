/**
 * Generate query string parameter from object data
 * 
 * @param {Object} obj - Query object
 * @returns {String} query string parameters
 */
export function generateQueryStringParameters(obj) {
  if (!obj) return ''
  const keys = Object.keys(obj)
  return keys.reduce((acc, key, i) => (
      acc + (i === 0 ? '' : '&') + `${key}=${obj[key]}`
    ), '?')
}

/**
 * Parse query string parameters into object
 * 
 * @param {String} str - Query string parameter
 * @returns {Object} object of query string params
 */
export function parseQueryString(str) {
  const words = decodeURIComponent(str)
    .split(/[?&]/g)
    .filter(word => word.trim() !== '')
  return words.reduce((acc, curr) => {
    const [key, value] = curr.split('=')
    return { ...acc, [key]: value }
  }, {})
}
