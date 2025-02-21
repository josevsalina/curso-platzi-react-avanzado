import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery } from '@apollo/client'
import { LIST_OF_PHOTO_CARDS } from '../hoc/listPhotos.query'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(LIST_OF_PHOTO_CARDS, {
    variables: { categoryId }
  })
  if (loading) return 'Loading...'
  if (error) return 'Error D:'
  return (
    <ul style={{ marginBottom: '60px' }}>
      {
        data.photos.map(photo => (
          <li key={photo.id}><PhotoCard {...photo} /></li>
        ))
      }
    </ul>
  )
}
