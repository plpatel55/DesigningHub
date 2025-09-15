import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwt: JwtService) {}

  async validateUser(email: string, pass: string) {
    return this.users.validate(email, pass)
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role }
    return { access_token: this.jwt.sign(payload) }
  }
}
