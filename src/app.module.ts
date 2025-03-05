import { Module } from '@nestjs/common';
import { AppController } from './application/service/controller';
import { ConfigService } from './configuration/service';
import { UserTableService } from './infrastructure/service/user';
import { DatabaseModule } from './infrastructure/module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [ConfigService, UserTableService],
  exports: [ConfigService],
})
export class AppModule {}
