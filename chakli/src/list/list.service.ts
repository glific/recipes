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

    return await this.mailchimpClient.lists.setListMember(
      listId,
      subscriber_hash,
      {
        email_address,
        status_if_new: status,
        status,
      },
    );
  }

  subscribe(data) {
    return this.managaeSubscription(data, 'subscribed')
      .then((success) => {
        return {
          message: `Successful subscription: ${data.email.input}`,
        };
      })
      .catch((error) => {
        return {
          message: `Error occured during subscription for ${data.email.input}`,
        };
      });
  }

  async unsubscribe(data) {
    return this.managaeSubscription(data, 'unsubscribed')
      .then((success) => {
        return {
          message: `Successful unsubscription: ${data.email.input}`,
        };
      })
      .catch((error) => {
        return {
          message: `Error occured while unsubscribing: ${data.email.input}`,
        };
      });
  }

  async getLists() {
    const lists = await this.mailchimpClient.lists.getAllLists();
    return { lists };
  }
}
