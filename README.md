For additional details, see [this article in the k6 docs](https://k6.io/docs/using-k6/modules)

## What is this?
This is a template repository showing how to use webpack, babel and corejs to bundle a test project into a single test script which can be run by k6.

This means that you can write scripts using:
1. node module resolution
2. external node modules and getting them automatically bundled.
3. `--compatibility-mode=base`, which does have performance benefits ([1](https://github.com/loadimpact/k6/issues/1167#issuecomment-553787857) [2](https://github.com/loadimpact/k6/issues/1167#issuecomment-553835092))

## How to use it 
```
# change main.js and package.json for your project
npm install .
npm run-script webpack

# local execution
k6 run build/app.bundle.js

# docker execution
docker run -v $(pwd)/build:/build loadimpact/k6 run /build/app.bundle.js 
```

To try out any of the other examples, just copy the content of your example file of choice into `main.js`
