import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.auth.validateUser(body.email, body.password)
    if (!user) throw new UnauthorizedException()
    return this.auth.login(user)
  }
}
