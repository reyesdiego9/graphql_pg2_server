import { gql } from 'apollo-server-express';
import { token, tokens } from '../resolvers/token';

export const typeDefs = gql`
  type Token {
    id_token: ID!
    token: String!
    visit: Visit!
  }

  type Query {
    tokens: [Token!]!
    token(id: ID!): Token
  }

  type Mutation {
    createToken(tokenInput: TokenInput!): Token!
    updateToken(id: ID!, tokenInput: TokenInput!): Token!
    deleteToken(id: ID!): Boolean!
  }

  input TokenInput {
    token: String!
    visitId: ID!
  }
`;

export const resolvers = {
  Query: {
    tokens,
    token
  }
};
