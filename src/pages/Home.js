import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
  const params = useParams()

  return (
    <>
      <Helmet>
        <title>🐶 Petgram! tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales lindos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
export default Home
