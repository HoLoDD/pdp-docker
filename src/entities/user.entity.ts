import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Squad } from './squad.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column('varchar', {
    length: 64,
    name: 'username',
    comment: 'user name',
    unique: true,
    nullable: false,
  })
  username: string;

  @Column('varchar', {
    length: 255,
    name: 'email',
    comment: 'User email',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    length: 64,
    name: 'password',
    comment: 'User password',
    unique: false,
    nullable: false,
  })
  password: string;

  @Column('varchar', {
    length: 255,
    name: 'photo',
    comment: 'User profile photo',
    unique: false,
    nullable: true,
  })
  photo: string;

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
   * External IDs
   */

  @Column('int', {
    name: 'tg_chat_id',
    comment: 'User telegram chat id',
    unique: true,
    nullable: true,
  })
  tgChatId: number;

  @Column('uuid', {
    name: 'squad_id',
    comment: 'Squad id reference',
    unique: false,
    nullable: true,
  })
  squadId: string;

  /**
   *    Relations
   */

  @ManyToOne(() => Squad, (squad) => squad.users)
  @JoinColumn([{ name: 'squad_id', referencedColumnName: 'id' }])
  squad: Squad;
}
