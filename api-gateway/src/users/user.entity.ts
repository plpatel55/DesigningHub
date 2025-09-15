import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') id: string
  @Column({ unique: true }) email: string
  @Column() passwordHash: string
  @Column({ default: 'free_user' }) role: string
  @CreateDateColumn() createdAt: Date
}
