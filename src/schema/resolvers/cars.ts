import { ApolloError } from 'apollo-server-express';
import { Car } from '../entities/Car';

export const cars = async () => {
  try {
    const cars = await Car.createQueryBuilder('car')
      .leftJoinAndSelect('car.client', 'client') // Agrega el left join con Client
      .getMany();
    return cars;
  } catch (err: any) {
    throw new ApolloError('Error getting cars', '500', err);
  }
};

export const car = async (_: any, { id }: { id: number }) => {
  try {
    const car = await Car.createQueryBuilder('car')
      .leftJoinAndSelect('car.client', 'client') // Agrega el left join con Client
      .where('car.id_car = :id', { id })
      .getOne();

    if (!car) {
      throw new ApolloError(`Car with id ${id} not found.`, '404');
    }
    return car;
  } catch (err: any) {
    throw new ApolloError(`Error getting car with id ${id}`, '500', err);
  }
};
