import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service'
import { User as UserModel, Post as PostModel, Prisma } from '@prisma/client'

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) { }

  @Get()
  getHello(): string {
    return 'hola'
  }

  @Post('signup')
  async signupUser(): Promise<UserModel> {

   
    return await this.prismaService.user .create({
      data: {
        name: 'luis',
        email: 'luissarabia80@gmail.com',
        
      },
    })
  }
}
