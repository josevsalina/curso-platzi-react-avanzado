import React, { useContext } from 'react'
import { Layout } from '../components/Layout/Layout'
import { Button } from '../components/UserForm/styles'
import { AppContext } from '../hooks/useContext'

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <Layout title='Perfil de usuario'>
        <Button onClick={removeAuth}>Cerrar Sesion</Button>
      </Layout>
    </>
  )
}
