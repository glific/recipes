import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class PgService {
  constructor(private connection: Connection) {}

  saveContact(data) {
    // console.log('data', data);
    //console.log('connection', this.connection);
    data.forEach((contact) => {
      this.save(contact);
    });
  }

  save(contact) {
    console.log('contact', contact);

    this.connection.query(
      `INSERT (name, phone) INTO contacts VALUES (${contact.name}, ${contact.phone})`,
    );
  }
}
