import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BqModule } from './bq/bq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
