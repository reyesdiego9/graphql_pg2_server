import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity
} from 'typeorm';
import { Car } from './Car';

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_client: number;

  @Column({ nullable: true })
  address: string;

  @Column()
  dpi: string;

  @Column()
  nit: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => Car, (car) => car.client)
  cars: Car[];
}
