import { Controller, Post } from '@nestjs/common';

import { BqService } from './bq.service';
import { PgService } from './../pg/pg.service';

@Controller('bq')
export class BqController {
  constructor(
    private readonly BqService: BqService,
    private readonly PqService: PgService,
  ) {}

  @Post()
  getData() {
    this.BqService.fetchData().then((data) => {
      this.PqService.saveContact(data);
    });
  }
}
