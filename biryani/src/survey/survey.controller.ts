import { Body, Controller, Post } from '@nestjs/common';

import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  saveResponse(@Body('results') results: any) {
    return this.surveyService.save(results);
  }
}
