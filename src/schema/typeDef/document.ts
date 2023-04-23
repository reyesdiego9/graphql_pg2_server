import { gql } from 'apollo-server-express';
import { documents, document, documentsByVisitId } from '../resolvers/document';

export const typeDefs = gql`
  type Document {
    id_document: ID!
    url_document: String!
    description: String
    visit: Visit!
  }

  type Query {
    documents: [Document!]!
    document(id: ID!): Document
    documentsByVisitId(visit_id: Int!): Document
  }

  type Mutation {
    createDocument(documentInput: DocumentInput!): Document!
    updateDocument(id: ID!, documentInput: DocumentInput!): Document!
    deleteDocument(id: ID!): Boolean!
  }

  input DocumentInput {
    url_document: String!
    description: String
    visitId: ID!
  }
`;

export const resolvers = {
  Query: {
    documents,
    document,
    documentsByVisitId
  }
};
