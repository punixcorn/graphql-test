import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//typeorm code for defining our table

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id!: number;
  @Column()
  name!: string;
  @Column()
  username!: string;
  @Column()
  password!: string;
}
