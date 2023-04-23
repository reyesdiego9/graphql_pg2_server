import { ApolloError } from 'apollo-server-express';
import { Document } from '../entities/Document';

export const documents = async () => {
  try {
    const documents = await Document.find();
    return documents;
  } catch (err: any) {
    throw new ApolloError('Error getting documents', '500', err);
  }
};

export const document = async (_: any, { id }: { id: number }) => {
  try {
    const document = await Document.findOne({
      where: { id_document: id }
    });
    if (!document) {
      throw new ApolloError(`Document with id ${id} not found.`, '404');
    }
    return document;
  } catch (err: any) {
    throw new ApolloError(`Error getting document with id ${id}`, '500', err);
  }
};
