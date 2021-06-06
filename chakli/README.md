## Description

This is a recipe that provides an way to manage mailing subscription using Mailchimp.

This project is based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Before you begin

1. You need to create a MailChimp Account
2. Generate API key - [Instructions](https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key)
3. Create a list in MailChimp (For developer default list is created and you cannot create new)

## Configuration

- `copy .env.sample to .env`
- Update required fields

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

**Assumption**

- In the flow `message response` should be of type `has an email` and the result name is `email`.

- This example assumes you have created a list in MailChimp and list id is updated in your .env file. You can use `lists` endpoint to find the id.

`http://glific.test:3001/subscribe`

- This endpoint can be called for subscribing to a list.

`http://glific.test:3001/unsubscribe`

- This endpoint can be called for unsubscribing from a list.

`http://glific.test:3001/lists`

- This endpoint can be called for getting lists.

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
