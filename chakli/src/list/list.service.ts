import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ListService {
  private mailchimpClient;

  constructor(private readonly configService: ConfigService) {
    this.mailchimpClient = require('@mailchimp/mailchimp_marketing');

    this.mailchimpClient.setConfig({
      apiKey: this.configService.get<string>('MAILCHIMP_API_KEY'),
      server: this.configService.get<string>('MAILCHIMP_SERVER_PREFIX'),
    });
  }

  async managaeSubscription(data, status) {
    const listId = this.configService.get<string>('MAILCHIMP_LIST_ID');

    const email_address = data.email.input;
    const md5 = require('md5');
    const subscriber_hash = md5(email_address.toLowerCase());

    await this.mailchimpClient.lists.setListMember(listId, subscriber_hash, {
      email_address,
      status_if_new: status,
      status,
    });
  }

  async subscribe(response) {
    await this.managaeSubscription(response, 'subscribed');
    return { message: 'Subscribed successfully.' };
  }

  async unsubscribe(response) {
    await this.managaeSubscription(response, 'unsubscribed');
    return { message: 'Unsubscribed successfully.' };
  }
}
