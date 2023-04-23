import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity
} from 'typeorm';
import { Car } from './Car';
import { State } from './State';
import { Service } from './Service';
import { Document } from './Document';
import { Token } from './Token';

@Entity()
export class Visit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_visit: number;

  @Column()
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @ManyToOne(() => State, (state) => state.id_sem)
  state: State;

  @ManyToOne(() => Car, (car) => car.visits, { cascade: true })
  car: Car;

  @Column({ nullable: true })
  comments: string;

  @OneToMany(() => Service, (service) => service.visit)
  services: Service[];

  @OneToMany(() => Document, (document) => document.visit)
  documents: Document[];

  @OneToMany(() => Token, (token) => token.visit)
  token: Token;
}
