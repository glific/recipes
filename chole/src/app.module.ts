import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WardModule } from './ward/ward.module';

@Module({
  imports: [WardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
