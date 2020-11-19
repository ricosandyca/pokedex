/**
 * Add transition animation
 * Animations are provided by animate.css  library
 * @docs https://animate.style/
 *
 * @param {Node} Content - React component to be themed
 * @param {Array} animations - Keys of animation
 * @returns {Function}
 */
export default function withAnimation(Content, ...animations) {
  const animation = (animations || []).reduce((acc, curr) => (
    acc + `animate__${curr} `
  ), '')
  
  return function () {
    return (
      <div className={`animate__animated ${animation}`}>
        <Content />
      </div>
    )
  }
}
