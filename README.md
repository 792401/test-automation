# Automated regression testing

This project contains support and examples to automate the regression testing of web GUI and REST API services.

### Tech stack
- For API tests: [Axios](https://axios-http.com/), a simple HTTP client together with [Jest](https://jestjs.io), a testing framework
- For UI tests: [Playwright](https://playwright.dev), an e2e testing framework for modern web apps

## Setup and running

### Prerequisites
- Install [npm](https://www.npmjs.com/package/npm)
- Clone project
- In project root, run ```npm install```; will install all dependecies listed in ```package.json``` file

### Running the tests
Inside project directory (at any level) run any custom scripts listed in ```package.json```, e.g.:
- ```npm run test:api``` to run API tests (more info [here](https://jestjs.io/docs/cli))
- ```npm run test:ui``` to run UI tests (more info [here](https://playwright.dev/docs/intro#command-line))

Before commiting new code:
- ```npm run lint``` for [linter](https://eslint.org/)
- ```npm run prettier-fix``` for automatic code [formatting](https://prettier.io/)
- ```npm run prettier-check``` for checking code [formatting](https://prettier.io/)

