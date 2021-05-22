import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class SurveyService {
  private authClient;

  constructor(private configService: ConfigService) {
    const keyFilename = this.configService.get<string>(
      'GOOGLE_APPLICATION_KEY',
    );
    const sheets = require('@googleapis/sheets');

    this.authClient = new sheets.auth.GoogleAuth({
      keyFilename,
      // Scopes can be specified either as an array or as a single, space-delimited string.
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
  }

  save(response) {
    return 'Save data';
  }

  fetch() {
    return this.listMajors();
  }

  /**
   * Prints the names and majors of students in a sample spreadsheet:
   * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */
  async listMajors() {
    const auth = await this.authClient.getClient();
    const { google } = require('googleapis');
    const sheets = google.sheets({ version: 'v4', auth });
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        range: 'Class Data!A2:E',
      },
      (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const rows = res.data.values;
        if (rows.length) {
          console.log('Name, Major:');
          // Print columns A and E, which correspond to indices 0 and 4.
          rows.map((row) => {
            console.log(`${row[0]}, ${row[4]}`);
          });
        } else {
          console.log('No data found.');
        }
      },
    );
  }
}
