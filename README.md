# Setup Instructions
I have a fake-module in this project to reproduce the error.  This makes setup and bit funky, but the following commands should work

- `rm -rf node_modules`
- `npm install`
- `git checkout .`

# Info
There are two branches
- `master`
    - Has a `.babelrc` in both the root and in the fake-module
    - Throws an error on `npm start` because babel register does not respect the `.babelrc` of `node_module/fake-module`
- `bable-config-js`
    - Replace the `.babelrc` in the root with a `babel.config.js`
    - Successfully compiles on `npm start` because `node_module/fake-module` is compiled with the presets in the config

# Error
`master` should successfully compile and run, using the correct `.babelrc` files for the root directory and for `node_modules/fake-module`
