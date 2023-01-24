import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('squad')
export class Squad {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column('varchar', {
    name: 'name',
    length: 64,
    comment: 'Squad name',
    unique: true,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 16,
    name: 'tag',
    comment: 'Squad tag',
    unique: true,
    nullable: false,
  })
  tag: string;

  @Column('varchar', {
    length: 255,
    name: 'description',
    comment: 'Squad description',
    unique: false,
    nullable: true,
  })
  description: string;

  @Column('varchar', {
    length: 255,
    name: 'logo',
    comment: 'Squad logo url',
    unique: false,
    nullable: true,
  })
  logo: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    comment: 'created at timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    comment: 'updated at timestamp',
  })
  updatedAt: Date;

  /**
   *    Relations
   */

  @OneToMany(() => User, (user) => user.squad)
  users: User[];
}
