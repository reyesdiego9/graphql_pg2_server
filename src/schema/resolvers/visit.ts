import { ApolloError } from 'apollo-server-express';
import { Visit } from '../entities/Visit';

export const visits = async () => {
  try {
    const visits = await Visit.createQueryBuilder('visit')
      .leftJoinAndSelect('visit.car', 'car')
      .leftJoinAndSelect('car.client', 'client')
      .leftJoinAndSelect('visit.documents', 'document')
      .getMany();

    return visits;
  } catch (err: any) {
    throw new ApolloError('Error getting visits', '500', err);
  }
};

export const visit = async (_: any, { id }: { id: number }) => {
  try {
    const visit = await Visit.createQueryBuilder('visit')
      .leftJoinAndSelect('visit.car', 'car')
      .leftJoinAndSelect('car.client', 'client')
      .leftJoinAndSelect('visit.documents', 'document')
      .leftJoinAndSelect('visit.token', 'token')
      .where('visit.id_visit = :id', { id })
      .getOne();

    if (!visit) {
      throw new ApolloError(`Visit with id ${id} not found.`, '404');
    }
    return visit;
  } catch (err: any) {
    throw new ApolloError(`Error getting visit with id ${id}`, '500', err);
  }
};

export const visitsByClientId = async (
  _: any,
  { id_client }: { id_client: number }
) => {
  try {
    const visits = await Visit.createQueryBuilder('visit')
      .leftJoinAndSelect('visit.car', 'car')
      .leftJoinAndSelect('car.client', 'client')
      .leftJoinAndSelect('visit.documents', 'document')
      .leftJoinAndSelect('visit.token', 'token')
      .where('client.id_client = :id_client', { id_client })
      .getMany();

    return visits;
  } catch (err: any) {
    throw new ApolloError('Error getting visits by client id', '500', err);
  }
};
