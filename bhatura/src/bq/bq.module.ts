import { HttpModule, Module } from '@nestjs/common';

import { BqController } from './bq.controller';
import { BqService } from './bq.service';

@Module({
  imports: [HttpModule],
  controllers: [BqController],
  providers: [BqService],
})
export class BqModule {}
