import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { UserForm } from '../components/UserForm'
import { AppContext } from '../hooks/useContext'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, error, loading } = useRegisterMutation()
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()
  const navigate = useNavigate()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(({ data }) => {
        console.log(data)
        const { signup } = data
        activateAuth(signup)
        navigate(-1)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      console.log(data)
      const { login: signin } = data
      activateAuth(signin)
      navigate(-1)
    }).catch(err => {
      console.error(err)
    })
  }

  const errorLoginMsg = errorLogin && 'El usuario no existe o hay algun problema'

  return (
    <>
      <Layout title='Para continuar'>
        <UserForm
          disabled={loading}
          onSubmit={onSubmit}
          error={
            error && 'El usuario ya existe'
          }
          title='Registrarse'
        />
        <UserForm onSubmit={onSubmitLogin} title='Iniciar Sesion' error={errorLoginMsg} disabled={loadingLogin} />
      </Layout>

    </>
  )
}

export default NotRegisteredUser
