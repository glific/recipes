import { Controller, Post } from '@nestjs/common';

import { BqService } from './bq.service';

@Controller('bq')
export class BqController {
  constructor(private readonly BqService: BqService) {}

  @Post()
  getData() {
    return this.BqService.fetchData();
  }
}
