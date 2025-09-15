import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Project } from './project.entity'

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}

  async create(name: string, userId: string) {
    return this.repo.save({ name, createdBy: { id: userId } as any })
  }

  async findAll(userId: string) {
    return this.repo.find({ where: { createdBy: { id: userId } }, order: { createdAt: 'DESC' } })
  }

  async findOne(id: string, userId: string) {
    return this.repo.findOneBy({ id, createdBy: { id: userId } })
  }
}
