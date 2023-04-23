import { gql } from 'apollo-server-express';
import { photo, photos } from '../resolvers/photo';

export const typeDefs = gql`
  type Photo {
    id_photo: ID!
    url_photo: String!
    description: String
    service: Service!
  }

  type Query {
    photos: [Photo!]!
    photo(id: ID!): Photo
  }

  type Mutation {
    createPhoto(photoInput: PhotoInput!): Photo!
    updatePhoto(id: ID!, photoInput: PhotoInput!): Photo!
    deletePhoto(id: ID!): Boolean!
  }

  input PhotoInput {
    url_photo: String!
    description: String
    serviceId: ID!
  }
`;

export const resolvers = {
  Query: {
    photos,
    photo
  }
};
