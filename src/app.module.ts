import { Module } from '@nestjs/common';
import { ConfigService } from './configuration/service';

@Module({
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule {
}
