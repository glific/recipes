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
- `copy ormconfig.json.sample to ormconfig.json`
  - Update database credentials

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

`http://glific.test:3001/bq/contact`

- returns the contact data from BigQuery and saves it to local postgres database/

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Recipe

You can find the Bhatura recipe [here](https://www.indianhealthyrecipes.com/bhatura/)
