import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserTableService } from 'src/infrastructure/service/user';

@Controller()
export class AppController {
  constructor(private readonly userService: UserTableService) {}

  @Get()
  async getHello(@Res() res: Response) {
    const users = await this.userService.getUsers();

    const userCount = users.length;

    res.setHeader('X-User-Count', userCount.toString());

    return res.status(200).json(users);
  }
}
