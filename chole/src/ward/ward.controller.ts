import { Controller, Post, Body } from '@nestjs/common';

import { WardService } from './ward.service';

@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @Post()
  getWard(@Body('results') results: any) {
    return this.wardService.getWardInfo(results.location);
  }
}
