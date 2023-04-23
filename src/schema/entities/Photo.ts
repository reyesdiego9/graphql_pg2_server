import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity
} from 'typeorm';
import { Service } from './Service';

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_photo: number;

  @Column()
  url_photo: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Service, (service) => service.photos)
  service: Service;
}
