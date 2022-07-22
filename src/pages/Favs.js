import React from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'
import { Layout } from '../components/Layout/Layout'

export const Favs = () => {
  return (
    <>
      <Layout title='Petgram! Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
        <h2>Favs</h2>
        <FavsWithQuery />
      </Layout>
    </>
  )
}
