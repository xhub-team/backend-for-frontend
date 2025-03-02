import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '../configuration/service';

@Module({
  providers: [
     ConfigService,
    {
      provide: 'PG_POOL',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.getDatabaseConfig();
        return new Pool({
          host: dbConfig.host,
          port: dbConfig.port,
          user: dbConfig.user,
          password: dbConfig.password,
          database: dbConfig.name,
          max: 10, // Максимальное количество соединений
          idleTimeoutMillis: 30000, // Закрытие неиспользуемых соединений через 30 сек
        });
      },
    },
  ],
  exports: ['PG_POOL'],
})
export class DatabaseModule {}
