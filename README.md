## What is this?
This is a small proof of concept that you can use node.js+webpack+babel+browserify to automatically generate a
single js file that could be ran by k6.
This means that you can write scripts using:
1. node module resolution
2. using external npm libraries and getting them automatically browserfied (this will obviously not
   work in some cases but at least it's more automatic :) )
3. Possibly being used with `--compatibility-mode=base` which does have a performance benefits
   ([1](https://github.com/loadimpact/k6/issues/1167#issuecomment-553787857)
   [2](https://github.com/loadimpact/k6/issues/1167#issuecomment-553835092))
4. If extend can do all kind of other things including writing scripts in typescript ;)

## How to use it 
```
# change main.js and package.json for your project
npm install .
npm run-script webpack
k6 run build/app.bundle.js
```

I am using docker to run inside of it as :

```
docker run --user $UID --rm -ti -v "`readlink -f .`:/data" --entrypoint /bin/bash circleci/node:11
```
