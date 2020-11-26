import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseUser } from "./APIs";

@Entity("user")
export default class User implements BaseUser {
  @PrimaryGeneratedColumn() id!: number;

  @Column("text", { nullable: false, unique: true }) email!: string;

  @Column("text", { nullable: false }) password!: string;

  @Column("text", { nullable: false }) salt!: string;

  @CreateDateColumn({ type: "timestamp" }) createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" }) updatedAt!: Date;
}
