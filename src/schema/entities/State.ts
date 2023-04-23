import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class State extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_sem: number;

  @Column({ unique: true })
  name: string;
}
