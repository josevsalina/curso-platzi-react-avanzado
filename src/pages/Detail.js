import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

const Detail = () => {
  const params = useParams()

  return (
    <Layout title={`Fotografia ${params.detailId}`}>
      <PhotoCardWithQuery detailId={params.detailId} />
    </Layout>
  )
}

export default Detail
