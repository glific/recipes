import { Injectable } from '@nestjs/common';

@Injectable()
export class WardService {
  getWardInfo() {
    return 'Natwar Nagar';
  }
}
