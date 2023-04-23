import { gql } from 'apollo-server-express';
import { getRepository } from 'typeorm';
import { Client } from '../entities/Client';
import { client, clients } from '../resolvers/client';

export const typeDefs = gql`
  type Client {
    id_client: ID!
    address: String
    dpi: String!
    nit: String!
    name: String!
    email: String
    phone: String
    username: String
    password: String
    cars: [Car!]!
  }

  type Query {
    clients: [Client]!
    client(id: ID!): Client
  }

  type Mutation {
    createClient(clientInput: ClientInput!): Client!
    updateClient(id: ID!, clientInput: ClientInput!): Client!
    deleteClient(id: ID!): Boolean!
  }

  input ClientInput {
    address: String
    dpi: String!
    nit: String!
    name: String!
    email: String
    phone: String
    username: String
    password: String
  }
`;

export const resolvers = {
  Query: {
    clients,
    client
  }
};
