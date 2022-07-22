import React from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'
import { Layout } from '../components/Layout/Layout'

const Favs = () => {
  return (
    <>
      <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar las fotos que les diste like'>
        <FavsWithQuery />
      </Layout>
    </>
  )
}

export default Favs
