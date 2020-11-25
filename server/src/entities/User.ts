import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseUser } from "./APIs";

@Entity('user')
export class User implements BaseUser {
  
  @PrimaryGeneratedColumn() id!: number;

  @Column('text', {nullable: false, unique: true}) email!: string;

  @Column('text', {nullable: false}) password!: string;

  @Column('text', {nullable: false}) salt!: string;

  @Column('datetime') updatedAt!: Date;

}