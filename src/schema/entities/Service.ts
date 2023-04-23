import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity
} from 'typeorm';
import { Visit } from './Visit';
import { CatalogService } from './CatalogService';
import { State } from './State';
import { Photo } from './Photo';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_service: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Visit, (visit) => visit.services)
  visit: Visit;

  @ManyToOne(
    () => CatalogService,
    (catalog_service) => catalog_service.id_catalog_service
  )
  catalog_service: CatalogService;

  @ManyToOne(() => State, (state) => state.id_sem)
  state: State;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  starttimestamp: Date;

  @Column({ nullable: true })
  endtimestamp: Date;

  @OneToMany(() => Photo, (photo) => photo.service)
  photos: Photo[];
}
