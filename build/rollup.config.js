//import typescript from 'rollup-plugin-typescript2';
//import VuePlugin from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';
import jsonjs from '@rollup/plugin-json';
// import { version, author } from "../package.json";

// const banner =
//   `/*!
// * uimi.js v${version}
// * A Vue.js 3.0 UI Library
// * Copyright (c) 2019-${new Date().getFullYear()} ${author}
// * All rights reserved.
// */`;

export default {
  input: "./lib/index.js",
  //input: "./src/test.ts",
  output: [
    {
      file: "./dist/node/cli/index.js",
      format: 'cjs',
      //banner,
      sourcemap: true
    }
  ],
  plugins: [
    jsonjs(),
    commonjs(),
    // typescript(),
  ]
  //external: ["node_modules"],
}
