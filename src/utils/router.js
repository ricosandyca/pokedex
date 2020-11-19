/**
 * Generate query string parameter from object data
 * 
 * @param {Object} obj - Query object
 * @returns {String} query string parameters
 */
export function generateQueryStringParameters(obj) {
  const keys = Object.keys(obj)
  return keys.reduce((acc, key, i) => (
      acc + (i === 0 ? '' : '&') + `${key}=${obj[key]}`
    ), '')
}
