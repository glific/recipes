import { HttpModule, Module } from '@nestjs/common';

import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';

@Module({
  imports: [HttpModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
