import React from 'react'
import { Grid, Image, Link } from './style'
import PropTypes from 'prop-types'

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

ListOfFavs.propType = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string
    })
  )
}
