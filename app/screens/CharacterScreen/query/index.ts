import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      type
      image
      gender
      species
      status
      origin {
        name
      }
    }
  }
`;
