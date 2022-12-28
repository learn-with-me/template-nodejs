# Nodejs API Template

> Note: This template is in progress right now. Version `1.0.0` will be released soon.

This ready-to-use express-based API template comes with a few preset features that will be used in future projects.

## Features

1. Commit hooks automation configured using [husky](https://www.npmjs.com/package/husky)
2. Code formatter via [prettier](https://www.npmjs.com/package/prettier)
3. Code linter using [eslint](https://www.npmjs.com/package/eslint)
4. GitHub workflow configured to check successful builds

## How to use the template

Easiest way is to click on the green "Use this template" button from [here](https://github.com/learn-with-me/nodejs-api-template). This will prompt your to create a new repository at a desired location. All you'll have to do is start adding features.

### API Endpoints
* /
* /v0/test
* /docs

##### Environment Variables
You won't be able to run the project without these configurations. For local development, create a `.env` file and add the following key-value pairs in it.
* NODE_ENV=development
* PORT=8000
* API_VERSION=/v0

### Development
* Create a .env file and add the environment variables in the root folder
* npm i
* npm run dev

### Documentation
All documentation is done in Swagger. JSON file can be easily edited at https://editor.swagger.io/

## Upcoming features

- [ ] Local development using `concurrently`, `nodemon` and a watcher
- [ ] Example endpoints API
- [ ] Unit testing support
- [ ] jsDoc support
- [ ] Swagger documentation, possibly using `swagger-ui-express`
- [ ] ORM support
- [ ] Template versioning
- [ ] Changelog
- [ ] Add correlation id to requests
