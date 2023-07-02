import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;
}
