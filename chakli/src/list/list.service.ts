import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  subscribe(response) {
    return { message: 'Subscribed successfully.' };
  }

  unsubscribe(response) {
    return { message: 'Unsubscribed successfully.' };
  }
}
