import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
export const Navbar = () => {
  const SIZE = '32px'
  return (
    <Nav>
      <Link exact to='/'><MdHome size={SIZE} /></Link>
      <Link exact to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link exact to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
