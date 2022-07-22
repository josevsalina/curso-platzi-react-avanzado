import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { AppContext } from './hooks/useContext'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pets/:id' element={<Home />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
        <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
        <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
        <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}
