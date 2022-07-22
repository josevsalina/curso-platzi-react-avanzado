import React from 'react'
import { Grid, Image, Link } from './style'
export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(i => (
          <Link key={i.id} to={`/detail/${i.id}`}>
            <Image src={i.src} />
          </Link>
        )
        )
      }
    </Grid>
  )
}
