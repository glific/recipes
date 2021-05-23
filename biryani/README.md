## Description

This is a recipe that provides an endpoint that could be used to periodically dump the data from BigQuery to a Postgres database.

This project is based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Before you begin

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the Google Spreadsheet API.](https://console.cloud.google.com/apis/library/sheets.googleapis.com)
3. [Set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started) so you can access the API from your local workstation.

## Configuration

- `copy .env.sample to .env`
- Update Google SpeadSheet credentials

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage

`http://glific.test:3001/survery`

- This endpoint can be called to save the data to the spreadsheet. This example assumses three fields: name, city, feedback

`http://glific.test:3001/survery/data`

- fetch the data from the spreadsheet

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Helpful links

- https://developers.google.com/sheets/api/guides/concepts

## Recipe

You can find the Biryani recipe [here](https://www.indianhealthyrecipes.com/chicken-biryani-recipe/)
