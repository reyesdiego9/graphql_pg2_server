import { ApolloError } from 'apollo-server-express';
import { Document } from '../entities/Document';

export const documents = async () => {
  try {
    const documents = await Document.createQueryBuilder('document')
      .leftJoinAndSelect('document.visit', 'visit')
      .leftJoinAndSelect('visit.car', 'car')
      .leftJoinAndSelect('visit.token', 'token')
      .getMany();
    return documents;
  } catch (err: any) {
    throw new ApolloError('Error getting documents', '500', err);
  }
};

export const document = async (_: any, { id }: { id: number }) => {
  try {
    const document = await Document.createQueryBuilder('document')
      .leftJoinAndSelect('document.visit', 'visit')
      .leftJoinAndSelect('visit.car', 'car')
      .leftJoinAndSelect('visit.token', 'token')
      .where('document.id_document = :id', { id })
      .getOne();
    if (!document) {
      throw new ApolloError(`Document with id ${id} not found.`, '404');
    }
    return document;
  } catch (err: any) {
    throw new ApolloError(`Error getting document with id ${id}`, '500', err);
  }
};

export const documentsByVisitId = async (
  _: any,
  { id_visit }: { id_visit: number }
) => {
  try {
    const documents = await Document.createQueryBuilder('document')
      .leftJoinAndSelect('document.visit', 'visit')
      .leftJoinAndSelect('visit.car', 'car')
      .leftJoinAndSelect('visit.token', 'token')
      .where('visit.id_visit = :id_visit', { id_visit })
      .getMany();
    return documents;
  } catch (err: any) {
    throw new ApolloError('Error getting documents by visit id', '500', err);
  }
};
