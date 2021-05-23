import { Module } from '@nestjs/common';

import { BqController } from './bq.controller';
import { BqService } from './bq.service';
import { PgService } from './../pg/pg.service';

@Module({
  controllers: [BqController],
  providers: [BqService, PgService],
})
export class BqModule {}
