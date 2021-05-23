import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class SurveyService {
  private authClient;

  private spreadSheetId = this.configService.get<string>(
    'GOOGLE_SPREADSHEET_ID',
  );

  constructor(private configService: ConfigService) {
    const keyFilename = this.configService.get<string>(
      'GOOGLE_APPLICATION_KEY',
    );
    const sheets = require('@googleapis/sheets');

    this.authClient = new sheets.auth.GoogleAuth({
      keyFilename,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  }

  async save(response) {
    const values = [
      [response.name.input, response.city.input, response.feedback.input],
    ];

    const resource = {
      values,
    };

    const auth = await this.authClient.getClient();
    const { google } = require('googleapis');
    const sheets = google.sheets({ version: 'v4', auth });

    sheets.spreadsheets.values.append(
      {
        spreadsheetId: this.spreadSheetId,
        range: 'Contact Data!B2:D',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource,
      },
      (err, result) => {
        if (err) {
          // Handle error.
          console.log(err);
        } else {
          console.log('The response is appended to the spreadsheet!');
        }
      },
    );

    return 'The response is appended to the spreadsheet!';
  }

  async fetch() {
    return await this.get();
  }

  async get() {
    const auth = await this.authClient.getClient();
    const { google } = require('googleapis');
    const sheets = google.sheets({ version: 'v4', auth });

    return new Promise((resolve) => {
      sheets.spreadsheets.values.get(
        {
          spreadsheetId: this.spreadSheetId,
          range: 'Contact Data!B2:D',
        },
        (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          const rows = res.data.values;
          if (rows.length) {
            console.log('Name, City, Feedback');
            // Print columns B and D, which correspond to indices 0 and 2.
            rows.map((row) => {
              console.log(`${row[0]}, ${row[1]}, ${row[2]}`);
            });
          } else {
            console.log('No data found.');
          }

          resolve(rows);
        },
      );
    });
  }
}
