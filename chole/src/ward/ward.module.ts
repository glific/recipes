import { HttpModule, Module } from '@nestjs/common';

import { WardController } from './ward.controller';
import { WardService } from './ward.service';

@Module({
  imports: [HttpModule],
  controllers: [WardController],
  providers: [WardService],
})
export class WardModule {}
