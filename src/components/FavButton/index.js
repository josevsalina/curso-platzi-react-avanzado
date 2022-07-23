import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropType from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='26px' /> {likes} likes!
    </Button>
  )
}

FavButton.PropType = {
  liked: PropType.bool.isRequired,
  likes: PropType.number.isRequired,
  onClick: PropType.func.isRequired
}
