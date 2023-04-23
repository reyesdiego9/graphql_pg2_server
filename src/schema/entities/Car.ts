import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
  JoinColumn
} from 'typeorm';
import { Client } from './Client';
import { Visit } from './Visit';

@Entity()
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_car: number;

  @Column()
  year: number;

  @Column({ nullable: true })
  vin: string;

  @Column()
  plate: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @ManyToOne(() => Client, (client) => client.cars)
  client: Client;

  @OneToMany(() => Visit, (visit) => visit.car)
  visits: Visit[];
}
