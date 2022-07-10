import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery } from '@apollo/client'
import { PHOTO_BY_ID } from '../hoc/photoById.query'

export const PhotoCardWithQuery = ({ detailId }) => {
  const { loading, error, data } = useQuery(PHOTO_BY_ID, {
    variables: { id: detailId }
  })
  console.log(data)
  if (loading) return 'Loading...'
  if (error) return 'Error D:'
  return (
    <PhotoCard {...data.photo} />
  )
}
