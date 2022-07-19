import React, { createContext, useState } from 'react'
import { useSessionStorage } from './useSessionStorage'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [token, setToken] = useSessionStorage('token', null)
  const [isAuth, setIsAuth] = useState((token))

  const activateAuth = (jwt) => {
    setIsAuth(true)
    setToken(jwt)
  }

  return (
    <AppContext.Provider value={{ isAuth, token, activateAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {
  AppContext, AppProvider
}
