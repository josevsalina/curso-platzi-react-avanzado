import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'

export const FavsWithQuery = () => {
  const { data, error, loading } = useGetFavorites()
  if (loading) return 'Loading...'
  if (error) return 'Error...'
  const { favs } = data || []

  return <ListOfFavs favs={favs} />
}
