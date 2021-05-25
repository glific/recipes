import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  saveResponse(@Body('results') results: any, @Body('contact') contact: any) {
    return this.surveyService.save(results, contact);
  }

  @Get(':number')
  fetchData(@Param('number') phoneNumber: string) {
    return this.surveyService.fetch(phoneNumber);
  }
}
