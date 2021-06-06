## Description

This is a recipe that provides an way to subscribe for a newsletter using Mailchimp.

This project is based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Before you begin

1. You need to create a MailChimp Account
2. Generate API key - [Instructions](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key)

## Configuration

- `copy .env.sample to .env`
- Update MailChimp API key

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

This example assumes you have created a list in MailChimp

`http://glific.test:3001/subscribe`

- This endpoint can be called for subscribing to a list.

`http://glific.test:3001/unsubscribe`

- This endpoint can be called for unsubscribing from a list.

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

- https://mailchimp.com/developer/marketing/guides/quick-start/#create-an-account

## Recipe

You can find the Chakli recipe [here](https://ministryofcurry.com/chakli-recipe/)
