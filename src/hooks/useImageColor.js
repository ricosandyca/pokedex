import { useState, useRef, useEffect } from 'react'
import extractImageColor from '../utils/image-color-extractor'

/**
 * Use image color hooks
 * By creating image DOM and extracting the colors of it
 * 
 * @param {String} imagePath - Image path, can be extrenal or internal url
 * @returns {Object} object of colors and image component
 */
export default function useImageColor(imagePath) {
  const [colors, setColors] = useState({})
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageRef = useRef()

  useEffect(() => {
    if (imageRef && imageLoaded)
      setColors(extractImageColor(imageRef.current))
  }, [imageRef, imageLoaded])

  return {
    colors,
    ImageComponent: (props) => {
      return (
        <img
          ref={imageRef}
          src={imagePath}
          alt={imagePath}
          onLoad={() => setImageLoaded(true)}
          crossOrigin='anonymous'
          {...props}
        />
      )
    }
  }
}
