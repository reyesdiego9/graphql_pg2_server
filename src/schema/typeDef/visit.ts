import { gql } from 'apollo-server-express';
import { visits, visit, visitsByClientId } from '../resolvers/visit';

export const typeDefs = gql`
  type Visit {
    id_visit: ID!
    start_date: String!
    end_date: String
    state: State!
    car: Car!
    comments: String
    services: [Service!]!
    documents: [Document!]!
    token: Token!
  }

  type Query {
    visits: [Visit!]!
    visit(id: ID!): Visit
    visitsByClientId(id_client: Int!): [Visit!]!
  }

  type Mutation {
    createVisit(visitInput: VisitInput!): Visit!
    updateVisit(id: ID!, visitInput: VisitInput!): Visit!
    deleteVisit(id: ID!): Boolean!
  }

  input VisitInput {
    start_date: String!
    end_date: String
    stateId: ID!
    carId: ID!
    comments: String
  }
`;

export const resolvers = {
  Query: {
    visits,
    visit,
    visitsByClientId
  }
};
