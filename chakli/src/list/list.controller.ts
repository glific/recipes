import { Body, Controller, Post } from '@nestjs/common';

import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  subscribe(@Body('results') results: any) {
    // call subscribe service
  }

  @Post()
  unsubscribe(@Body('results') results: any) {
    // call unsubscribe service
  }
}
