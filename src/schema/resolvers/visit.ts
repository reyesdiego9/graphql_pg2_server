import { ApolloError } from 'apollo-server-express';
import { Visit } from '../entities/Visit';

export const visits = async () => {
  try {
    const visits = await Visit.find({
      relations: ['car']
    });
    return visits;
  } catch (err: any) {
    throw new ApolloError('Error getting visits', '500', err);
  }
};

export const visit = async (_: any, { id }: { id: number }) => {
  try {
    const visit = await Visit.findOne({
      where: { id_visit: id },
      relations: ['car']
    });
    if (!visit) {
      throw new ApolloError(`Visit with id ${id} not found.`, '404');
    }
    return visit;
  } catch (err: any) {
    throw new ApolloError(`Error getting visit with id ${id}`, '500', err);
  }
};
