import { ApolloError } from 'apollo-server-express';
import { Token } from '../entities/Token';

export const tokens = async () => {
  try {
    const tokens = await Token.find();
    return tokens;
  } catch (err: any) {
    throw new ApolloError('Error getting tokens', '500', err);
  }
};

export const token = async (_: any, { id }: { id: number }) => {
  try {
    const token = await Token.findOne({ where: { id_token: id } });
    if (!token) {
      throw new ApolloError(`Token with id ${id} not found.`, '404');
    }
    return token;
  } catch (err: any) {
    throw new ApolloError(`Error getting token with id ${id}`, '500', err);
  }
};
