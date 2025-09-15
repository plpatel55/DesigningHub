import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Controller('projects')
export class ProjectsController {
  constructor(private proj: ProjectsService) {}

  @Post()
  create(@Body() body: { name: string }, @Request() req: any) {
    return this.proj.create(body.name, req.user.userId)
  }

  @Get()
  list(@Request() req: any) {
    return this.proj.findAll(req.user.userId)
  }
}
