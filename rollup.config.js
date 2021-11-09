"use strict";

const path = require("path");
const { babel } = require("@rollup/plugin-babel");

const BUNDLE = process.env.BUNDLE === "true";
let fileDest = `main`;

const plugins = [
  babel({
    // Only transpile our source code
    exclude: "node_modules/**",
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: "bundled",
  }),
];

if (BUNDLE) {
  fileDest += ".bundle";
}

const rollupConfig = {
  input: path.resolve(__dirname, `src/js/main.js`),
  output: {
    file: path.resolve(__dirname, `dist/js/${fileDest}.js`),
  },
  plugins,
};

rollupConfig.output.name = "main";

module.exports = rollupConfig;
