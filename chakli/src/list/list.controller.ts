import { Body, Controller, Get, Post } from '@nestjs/common';

import { ListService } from './list.service';

@Controller('')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('subscribe')
  subscribe(@Body('results') results: any) {
    // call subscribe service
    return this.listService.subscribe(results);
  }

  @Post('unsubscribe')
  unsubscribe(@Body('results') results: any) {
    // call unsubscribe service
    return this.listService.unsubscribe(results);
  }

  @Get('lists')
  getLists() {
    // call get getLists service
    return this.listService.getLists();
  }
}
