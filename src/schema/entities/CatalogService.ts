import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class CatalogService extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_catalog_service: number;

  @Column()
  fault: string;

  @Column()
  charge: number;
}
