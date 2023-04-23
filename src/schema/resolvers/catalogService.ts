import { ApolloError } from 'apollo-server-express';
import { CatalogService } from '../entities/CatalogService';

export const catalogServices = async () => {
  try {
    const catalogServices = await CatalogService.find();
    return catalogServices;
  } catch (err: any) {
    throw new ApolloError('Error getting catalog services', '500', err);
  }
};

export const catalogService = async (_: any, { id }: { id: number }) => {
  try {
    const catalogService = await CatalogService.findOne({
      where: { id_catalog_service: id }
    });
    if (!catalogService) {
      throw new ApolloError(`Catalog service with id ${id} not found.`, '404');
    }
    return catalogService;
  } catch (err: any) {
    throw new ApolloError(
      `Error getting catalog service with id ${id}`,
      '500',
      err
    );
  }
};
