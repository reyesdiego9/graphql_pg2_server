import { ApolloError } from 'apollo-server-express';
import { Service } from '../entities/Service';

export const services = async () => {
  try {
    const services = await Service.find({
      relations: ['catalog_service', 'state', 'photos', 'visit']
    });
    return services;
  } catch (err: any) {
    throw new ApolloError('Error getting services', '500', err);
  }
};

export const service = async (_: any, { id }: { id: number }) => {
  try {
    const service = await Service.findOne({
      where: { id_service: id },
      relations: ['catalog_service', 'state', 'photos', 'visit']
    });
    if (!service) {
      throw new ApolloError(`Service with id ${id} not found.`, '404');
    }
    return service;
  } catch (err: any) {
    throw new ApolloError(`Error getting service with id ${id}`, '500', err);
  }
};
