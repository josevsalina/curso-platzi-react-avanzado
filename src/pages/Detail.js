import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()

  return (
    <PhotoCardWithQuery detailId={params.detailId} />
  )
}
