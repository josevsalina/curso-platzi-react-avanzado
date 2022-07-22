import React, { Suspense, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { AppContext } from './hooks/useContext'
import { Navbar } from './components/Navbar'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
