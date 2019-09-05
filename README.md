# npm-component-test

## Purpose
Just a simple repo for testing the creation of a npm component library with peer dependencies (`mobx`/`react`)
Basically I created this to demonstrate how to solve the [React Hooks](https://reactjs.org/warnings/invalid-hook-call-warning.html) being triggered by multiple `react` instances

## How to test (Prod)
```
# build library package
cd my-lib
npm install
npm build

# build app
cd ../my-app
npm install
npm link ../my-lib
npm build
```

## How to test (Dev)
Window 1
```
# build library package 
cd my-lib
npm install
npm start
```
Window 2
```
# build app
cd my-app
npm install
npm link ../my-lib
npm start
```

## Key Takeaways
- Need to [use peer dependencies](https://nodejs.org/es/blog/npm/peer-dependencies/) for certain modules (like `react`/`mobx`)
- Need to [expose the library & libraryTarget](https://webpack.js.org/guides/author-libraries/#expose-the-library) in `webpack.config.js` of the library
- Need to [externalize peer dependecies](https://webpack.js.org/guides/author-libraries/#externalize-lodash) in `webpack.config.js` of the library
- Need to [alias peer dependencies](https://webpack.js.org/configuration/resolve/) in `webpack.config.js` of **the application** (as per this [github issue](https://github.com/facebook/react/issues/13991))
- Need to [npm link](https://docs.npmjs.com/cli/link) our library (if we're developing)
