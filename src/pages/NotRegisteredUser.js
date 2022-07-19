import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { AppContext } from '../hooks/useContext'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, error, loading } = useRegisterMutation()
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(({ data }) => {
        console.log(data)
        const { signup } = data
        activateAuth(signup)
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
    }).catch(err => {
      console.error(err)
    })
  }

  const errorLoginMsg = errorLogin && 'El usuario no existe o hay algun problema'

  return (
    <>
      <UserForm
        disabled={loading}
        onSubmit={onSubmit}
        error={
          error && 'El usuario ya existe'
        }
        title='Registrarse'
      />
      <UserForm onSubmit={onSubmitLogin} title='Iniciar Sesion' error={errorLoginMsg} disabled={loadingLogin} />
    </>
  )
}
