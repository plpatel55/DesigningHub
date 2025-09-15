import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm'
import { User } from '../users/user.entity'

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid') id: string
  @Column() name: string
  @Column({ type: 'bytea', nullable: true }) ydoc: Buffer
  @ManyToOne(() => User, { onDelete: 'CASCADE' }) createdBy: User
  @CreateDateColumn() createdAt: Date
}
