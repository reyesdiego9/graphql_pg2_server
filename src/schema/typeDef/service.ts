import { gql } from 'apollo-server-express';
import { service, services } from '../resolvers/service';

export const typeDefs = gql`
  type Service {
    id_service: ID!
    description: String
    visit: Visit!
    catalog_service: CatalogService!
    state: State!
    starttimestamp: String!
    endtimestamp: String
    photos: [Photo!]!
  }

  type Query {
    services: [Service!]!
    service(id: ID!): Service
  }

  type Mutation {
    createService(serviceInput: ServiceInput!): Service!
    updateService(id: ID!, serviceInput: ServiceInput!): Service!
    deleteService(id: ID!): Boolean!
  }

  input ServiceInput {
    description: String
    visitId: ID!
    catalogServiceId: ID!
    stateId: ID!
    starttimestamp: String!
    endtimestamp: String
  }
`;

export const resolvers = {
  Query: {
    services,
    service
  }
};
