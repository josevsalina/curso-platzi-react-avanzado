import React, { createContext, useState } from 'react'
import { useSessionStorage } from './useSessionStorage'

const AppContext = createContext(null)

const AppProvider = ({ client, ...props }) => {
  const [token, setToken] = useSessionStorage('token', null)
  const [isAuth, setIsAuth] = useState((token))

  const activateAuth = (jwt) => {
    setIsAuth(true)
    setToken(jwt)
  }

  const removeAuth = () => {
    setIsAuth(false)
    setToken(null)
    window.sessionStorage.removeItem('token')
  }

  return (
    <AppContext.Provider value={{ isAuth, token, activateAuth, removeAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {
  AppContext, AppProvider
}
