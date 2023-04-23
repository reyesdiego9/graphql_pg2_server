import { gql } from 'apollo-server';
import { car, cars } from '../resolvers/cars';

export const typeDefs = gql`
  type Car {
    id_car: ID!
    year: Int!
    vin: String
    plate: String!
    model: String!
    brand: String!
    client: Client!
    visits: [Visit!]!
  }

  type Query {
    cars: [Car]!
    car(id: ID!): Car
  }

  type Mutation {
    createCar(carInput: CarInput!): Car!
    updateCar(id: ID!, carInput: CarInput!): Car!
    deleteCar(id: ID!): Boolean!
  }

  input CarInput {
    year: Int!
    vin: String
    plate: String!
    model: String!
    brand: String!
    clientId: ID!
  }
`;

export const resolvers = {
  Query: {
    cars,
    car
  }
};
