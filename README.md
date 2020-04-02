# Storybook example

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Prerequisites

Be sure [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) are installed.
We also use [Yarn](https://classic.yarnpkg.com/), but you could use NPM instead.

## How to use

### Installation

```sh
yarn
```

### Development

The app:

```sh
yarn start
```

The Storybook:

```sh
yarn storybook
```

You could instead run the commands above concurrently by running:

```sh
yarn dev
```

### Build

The app:

```sh
yarn build
```

The Storybook:

```sh
yarn build-storybook
```

You could instead run the commands above concurrently by running:

```sh
yarn prod
```

### Unit Tests

```sh
yarn test
```

### Visual Regression Tests

Be sure you created a `.env` file with:

```dotenv
CHROMATIC_APP_CODE=xxxxxxxx
```

Then you can run:

```sh
yarn chromatic
```

The result is visible [here](https://www.chromaticqa.com/builds?appId=5e861c3506f1710022e42e0c).

## Resources

- [Create React App (CRA)](https://create-react-app.dev/)
- [Material-UI](https://material-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Husky](https://www.npmjs.com/package/husky)
