# Bundling using Rollup

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the standardized ES module format for code, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. Rollup can optimize ES modules for faster native loading in modern browsers, or output a legacy module format allowing ES module workflows today.

## Configuration

Can be found in `rollup.config.js`.

## Dependencies used

- @rollup/plugin-babel
- @rollup/plugin-commonjs
- @rollup/plugin-node-resolve
- rollup
- rollup-plugin-terser
- rollup-plugin-typescript2

## References

- npmjs [rollup](https://www.npmjs.com/package/rollup)
