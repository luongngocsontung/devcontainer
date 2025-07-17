import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scenario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}
