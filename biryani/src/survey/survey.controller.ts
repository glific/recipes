import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  saveResponse(@Body('results') results: any) {
    return this.surveyService.save(results);
  }

  @Get(':number')
  fetchData(@Param('number') phoneNumber: string) {
    return this.surveyService.fetch(phoneNumber);
  }
}
