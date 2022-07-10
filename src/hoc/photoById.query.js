import { gql } from '@apollo/client'

export const PHOTO_BY_ID = gql`
  query getSinglePhoto ($id: ID!) {
    photo (id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
