import React from 'react'
import { Img, ImgWrapper, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../container/toggleLike'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const [show, ref] = useNearScreen()

  const { mutation } = useMuationToogleLike()
  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton onClick={handleFavClick} likes={likes} liked={liked} />
          </>
        )
      }
    </Article>
  )
}

PhotoCard.propType = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must not be less than 0`)
    }
  }
}
