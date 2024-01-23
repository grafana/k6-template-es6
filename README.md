This is a template repository showing how to use `Babel` and `Webpack` to bundle the different files into CommonJS modules, using its [`webpack.config.js`](./webpack.config.js) configuration.

In this project, you can write k6 tests using:
1. node module resolution.
2. external node modules and getting them automatically bundled.
3. unsupported ES+ features like the optional chaining ( `?.` ) operator.
4. [--compatibility-mode=base](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/), which does have performance benefits. 

## Installation

Click **Use this template** to create a repository from this template. 

Clone the generated repository on your local machine, move to the project root folder and install the dependencies defined in [`package.json`](./package.json)

```bash
npm install
```

## Running the test

Attempting to run the tests in [src](./src/) will fail because:
-  k6 does not know how to resolve node modules.
-  k6 does not recognize some ES+ features like the optional chaining ( `?.` ) operator. 

To address this, we'll use `Webpack` to bundle the dependencies and polyfill ES+ features.

```bash
npm run bundle
```

This command creates the final test files to the `./dist` folder.

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run dist/optional-chaining-test.js
# or 
k6 run dist/faker-test.js
```

The bundled tests will be transpiled to ES5.1 code with CommonJS modules, this allows running the tests with [`--compatibility-mode=base`](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/) for better performance:

```bash
k6 run --compatibility-mode=base dist/optional-chaining-test.js
```

## Learn more

- [k6 Docs: working with modules](https://grafana.com/docs/k6/latest/using-k6/modules/)
- [JavaScript Compatibility Mode](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/)
- [grafana/k6-template-typescript](https://github.com/grafana/k6-template-typescript)
- [grafana/k6-rollup-example](https://github.com/grafana/k6-rollup-example)