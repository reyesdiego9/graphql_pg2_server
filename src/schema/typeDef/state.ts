import { gql } from 'apollo-server-express';
import { state, states } from '../resolvers/state';

export const typeDefs = gql`
  type State {
    id_sem: ID!
    name: String!
  }

  type Query {
    states: [State!]!
    state(id: ID!): State
  }

  type Mutation {
    createState(stateInput: StateInput!): State!
    updateState(id: ID!, stateInput: StateInput!): State!
    deleteState(id: ID!): Boolean!
  }

  input StateInput {
    name: String!
  }
`;

export const resolvers = {
  Query: {
    states,
    state
  }
};
