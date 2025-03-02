import { Injectable } from '@nestjs/common';
import { UserTableService } from 'src/infrastructure/service/user';

@Injectable()
export class AppService {
 constructor(private readonly userService: UserTableService) {}

  async getHello(): Promise<string> {
    const users = await this.userService.getUsers();
    console.log(users);
    return `Hello, ${users.length} users found!`;
  }
}
