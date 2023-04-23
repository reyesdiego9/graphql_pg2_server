import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity
} from 'typeorm';
import { Visit } from './Visit';

@Entity()
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_document: number;

  @Column()
  url_document: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Visit, (visit) => visit.documents)
  visit: Visit;
}
