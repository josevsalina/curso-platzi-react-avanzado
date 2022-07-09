import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(photo => (
          <li key={photo}><PhotoCard /></li>
        ))
      }
    </ul>
  )
}
