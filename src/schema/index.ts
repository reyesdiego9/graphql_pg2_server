import { gql } from 'apollo-server';
import {
  typeDefs as client,
  resolvers as clientResolver
} from './typeDef/client';
import { typeDefs as cars, resolvers as carResolver } from './typeDef/cars';
import {
  typeDefs as catalogService,
  resolvers as catalogServiceResolver
} from './typeDef/catalogService';
import {
  typeDefs as Service,
  resolvers as serviceResolver
} from './typeDef/service';
import { typeDefs as Photo, resolvers as photoResolver } from './typeDef/photo';
import { typeDefs as State, resolvers as stateResolver } from './typeDef/state';
import { typeDefs as Visit, resolvers as visitResolver } from './typeDef/visit';
import { typeDefs as Token, resolvers as tokenResolver } from './typeDef/token';
import {
  typeDefs as Document,
  resolvers as documentResolver
} from './typeDef/document';

const rootTypeDefs = gql`
  type Query {
    _: String
  }
`;

export const resolvers = [
  carResolver,
  catalogServiceResolver,
  clientResolver,
  visitResolver,
  serviceResolver,
  photoResolver,
  stateResolver,
  tokenResolver,
  documentResolver
];
export const typeDefs = [
  rootTypeDefs,
  client,
  cars,
  catalogService,
  Service,
  Photo,
  State,
  Token,
  Document,
  Visit
];
