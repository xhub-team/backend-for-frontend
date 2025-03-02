import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { UserDAO } from '../dao/table';

@Injectable()
export class UserTableService {
  constructor(@Inject('PG_POOL') private pool: Pool) {}

  async getUsers(): Promise<Array<UserDAO>> {
    const { rows } = await this.pool.query('SELECT * FROM public.user');
    return rows as Array<UserDAO>;
  }
}
