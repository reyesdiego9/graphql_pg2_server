import { ApolloError } from 'apollo-server-express';
import { Photo } from '../entities/Photo';

export const photos = async () => {
  try {
    const photos = await Photo.find();
    return photos;
  } catch (err: any) {
    throw new ApolloError('Error getting photos', '500', err);
  }
};

export const photo = async (_: any, { id }: { id: number }) => {
  try {
    const photo = await Photo.findOne({ where: { id_photo: id } });
    if (!photo) {
      throw new ApolloError(`Photo with id ${id} not found.`, '404');
    }
    return photo;
  } catch (err: any) {
    throw new ApolloError(`Error getting photo with id ${id}`, '500', err);
  }
};
