import React from 'react'
import { Img, ImgWrapper, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../container/toggleLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()

  const { mutation, mutationError } = useMuationToogleLike()
  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    !mutationError && setLiked(!liked)
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
