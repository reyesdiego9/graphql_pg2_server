import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity
} from 'typeorm';
import { Visit } from './Visit';

@Entity()
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_token: number;

  @Column()
  token: string;

  @ManyToOne(() => Visit, (visit) => visit.token)
  visit: Visit;
}
