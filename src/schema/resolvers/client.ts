import { ApolloError } from 'apollo-server-express';
import { Client } from '../entities/Client';

export const clients = async () => {
  try {
    const clients = await Client.createQueryBuilder('client')
      .leftJoinAndSelect('client.cars', 'car')
      .leftJoinAndSelect('car.visits', 'visit')
      .getMany();
    return clients;
  } catch (err: any) {
    throw new ApolloError('Error getting clients', '500', err);
  }
};

export const client = async (_: any, { id }: { id: number }) => {
  try {
    const client = await Client.createQueryBuilder('client')
      .leftJoinAndSelect('client.cars', 'car')
      .leftJoinAndSelect('car.visits', 'visit')
      .where('client.id_client = :id', { id })
      .getOne();
    if (!client) {
      throw new ApolloError(`Client with id ${id} not found.`, '404');
    }
    return client;
  } catch (err: any) {
    throw new ApolloError(`Error getting client with id ${id}`, '500', err);
  }
};
