## Description

This is recipe for fetching ward for a user when they share their location.

We are using https://www.ichangemycity.com map API to fetch the ward.

Response

```
  { ward_iid: '938', ward_name: 'KW Ward', ward_no: '4', city_id: '2' }
```

This project is bases on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

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

Endpoint that should be configured as webhook
`http://glific.test:3001/ward`

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

You can find the Chole recipe [here](https://www.cookwithmanali.com/punjabi-chole-chickpeas-curry/)
