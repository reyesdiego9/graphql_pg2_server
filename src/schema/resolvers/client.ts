import { ApolloError } from 'apollo-server-express';
import { Client } from '../entities/Client';

export const clients = async () => {
  try {
    const clients = await Client.find({
      relations: ['cars']
    });
    return clients;
  } catch (err: any) {
    throw new ApolloError('Error getting clients', '500', err);
  }
};

export const client = async (_: any, { id }: { id: number }) => {
  try {
    const client = await Client.findOne({
      where: { id_client: id },
      relations: ['cars']
    });
    if (!client) {
      throw new ApolloError(`Client with id ${id} not found.`, '404');
    }
    return client;
  } catch (err: any) {
    throw new ApolloError(`Error getting client with id ${id}`, '500', err);
  }
};
