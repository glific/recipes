import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BqService {
  constructor(private configService: ConfigService) {}

  async fetchData() {
    const { BigQuery } = require('@google-cloud/bigquery');

    const keyFilename = this.configService.get<string>(
      'GOOGLE_APPLICATION_KEY',
    );

    const projectId = this.configService.get<string>(
      'GOOGLE_APPLICATION_PROJECT_ID',
    );

    const projectDB = this.configService.get<string>(
      'GOOGLE_APPLICATION_PROJECT_DB',
    );

    const contactTable = `${projectId}.${projectDB}.contacts`;

    // create a client
    const bigqueryClient = new BigQuery({ projectId, keyFilename });

    // fetch contact information
    const query = `
          SELECT c.id, c.name, c.phone, c.language, c.inserted_at, c.updated_at FROM (
            SELECT id, name, phone, language, inserted_at, updated_at, ROW_NUMBER() OVER (
              PARTITION BY id ORDER BY updated_at DESC
            ) AS rn
            FROM \`${contactTable}\`) c
          WHERE c.rn = 1
          ORDER BY c.updated_at DESC
          LIMIT 10`;

    const options = {
      query,
    };

    // run the query
    const [rows] = await bigqueryClient.query(options);
    return rows;
  }
}
