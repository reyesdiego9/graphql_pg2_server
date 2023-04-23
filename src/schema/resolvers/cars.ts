import { ApolloError } from 'apollo-server-express';
import { Car } from '../entities/Car';

export const cars = async () => {
  try {
    const cars = await Car.find({
      relations: ['client', 'visits']
    });
    return cars;
  } catch (err: any) {
    throw new ApolloError('Error getting cars', '500', err);
  }
};

export const car = async (_: any, { id }: { id: number }) => {
  try {
    const car = await Car.findOne({
      where: { id_car: id },
      relations: ['client', 'visits']
    });
    if (!car) {
      throw new ApolloError(`Car with id ${id} not found.`, '404');
    }

    if (!car.client) {
      throw new ApolloError(`Client not found for car with id ${id}.`, '500');
    }
    return car;
  } catch (err: any) {
    throw new ApolloError(`Error getting car with id ${id}`, '500', err);
  }
};
