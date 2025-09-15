import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string) {
    const passwordHash = await bcrypt.hash(password, 12)
    return this.repo.save({ email, passwordHash })
  }

  async findByEmail(email: string) {
    return this.repo.findOneBy({ email })
  }

  async validate(email: string, pass: string) {
    const user = await this.findByEmail(email)
    if (user && (await bcrypt.compare(pass, user.passwordHash))) return user
    return null
  }
}
