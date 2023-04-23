import { gql } from 'apollo-server-express';
import { catalogService, catalogServices } from '../resolvers/catalogService';

export const typeDefs = gql`
  type CatalogService {
    id_catalog_service: ID!
    fault: String!
    charge: Float!
  }

  type Query {
    catalogServices: [CatalogService!]!
    catalogService(id: ID!): CatalogService
  }

  type Mutation {
    createCatalogService(
      catalogServiceInput: CatalogServiceInput!
    ): CatalogService!
    updateCatalogService(
      id: ID!
      catalogServiceInput: CatalogServiceInput!
    ): CatalogService!
    deleteCatalogService(id: ID!): Boolean!
  }

  input CatalogServiceInput {
    fault: String!
    charge: Float!
  }
`;

export const resolvers = {
  Query: {
    catalogServices,
    catalogService
  }
};
