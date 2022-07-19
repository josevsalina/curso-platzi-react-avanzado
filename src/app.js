import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { AppContext } from './hooks/useContext'

export const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/user' element={(isAuth) ? <User /> : <NotRegisteredUser />} />
        <Route path='/favs' element={(isAuth) ? <Favs /> : <NotRegisteredUser />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}
