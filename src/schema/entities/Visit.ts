import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
  JoinColumn
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

  @ManyToOne(() => Car, (car) => car.visits)
  car: Car;

  @Column({ nullable: true })
  comments: string;

  @OneToMany(() => Service, (service) => service.visit)
  services: Service[];

  @OneToMany(() => Document, (document) => document.visit)
  documents: Document[];

  @ManyToOne(() => Token, (token) => token.visit)
  @JoinColumn([{ name: 'id_token', referencedColumnName: 'id_token' }])
  token: Token;
}
