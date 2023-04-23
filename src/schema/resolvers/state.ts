import { ApolloError } from 'apollo-server-express';
import { State } from '../entities/State';

export const states = async () => {
  try {
    const states = await State.find();
    return states;
  } catch (err: any) {
    throw new ApolloError('Error getting states', '500', err);
  }
};

export const state = async (_: any, { id }: { id: number }) => {
  try {
    const state = await State.findOne({ where: { id_sem: id } });
    if (!state) {
      throw new ApolloError(`State with id ${id} not found.`, '404');
    }
    return state;
  } catch (err: any) {
    throw new ApolloError(`Error getting state with id ${id}`, '500', err);
  }
};
