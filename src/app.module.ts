import { Module } from '@nestjs/common';
import { AppController } from './application/controller';
import { AppService } from './application/service';
import { ConfigService } from './configuration/service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
