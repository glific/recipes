import { Controller, Get } from '@nestjs/common';

import { WardService } from './ward.service';

@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @Get()
  getWard() {
    return this.wardService.getWardInfo();
  }
}
