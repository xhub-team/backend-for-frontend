import { Module } from '@nestjs/common';
import { AppController } from './application/service/controller';
import { AppService } from './application/service/handler';
import { ConfigService } from './configuration/service';
import { UserTableService } from './infrastructure/service/user';
import { DatabaseModule } from './infrastructure/module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, UserTableService],
  exports: [ConfigService],
})
export class AppModule {}
