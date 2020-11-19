import { Link } from 'react-router-dom'
import { generateQueryStringParameters } from '../utils/router'

/**
 * Override component to have router link
 * 
 * @param {Node} Content
 * @return {Node}
 */
export default function withLink(Content) {
  return function ({ path, query, ...props }) {
    const isActive = !!path

    // get full path
    const queryString = generateQueryStringParameters(query)
    const hasQueryString = queryString.trim() !== ''
    const fullPath = hasQueryString
      ? `${path}?${queryString}`
      : path

    if (!isActive) return (<Content {...props} />)

    return (
      <Link to={fullPath} style={{ textDecoration: 'none' }}>
        <Content link={isActive} {...props} />
      </Link>
    )
  }
}
