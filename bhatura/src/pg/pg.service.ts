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
      `INSERT INTO contacts
        (id, name, phone, language, inserted_at, updated_at)
      VALUES
        (
          ${contact.id}, '${contact.name}', '${contact.phone}', '${contact.language}',
          '${contact.inserted_at.value}', '${contact.updated_at.value}'
        )`,
    );
  }
}
