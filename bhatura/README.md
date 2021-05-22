## Description

This is a recipe that provides an endpoint that could be used to periodically dump the data from BigQuery to a Postgres database.

This project is based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Before you begin

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the Google BigQuery API.](https://console.cloud.google.com/flows/enableapi?apiid=bigquery.googleapis.com)
3. [Set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started) so you can access the API from your local workstation.

## Configuration

- `copy .env.sample to .env`
- Update BigQuery credentials

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## End points

- http://glific.test:3001/bq
  - returns the contact data from BigQuery
