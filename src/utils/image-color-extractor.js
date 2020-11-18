import color from 'color'
import ColorThief from 'colorthief'

const colorThief = new ColorThief()

/**
 * Extract image colors
 * 
 * @param {Element} imgElm - HTML image element to extract
 * @returns {Object} Extracted colors
 */
export default function extractImageColor(imgElm) {
  // get image's dominant color
  const extractedColors = colorThief.getColor(imgElm)
  const currentColor = color(extractedColors)
  const dominant = currentColor.darken(.1).hex()
  const dominantLighten = currentColor.lighten(.15).hex()

  // get contrast text color
  const isLight = color(dominantLighten).darken(.25).isLight()
  const contrastText = isLight ? '#000000' : '#FFFFFF'

  return {
    dominant,
    dominantLighten,
    contrastText,
    isLight
  }
}
