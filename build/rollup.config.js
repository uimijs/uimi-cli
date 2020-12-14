import { terser } from 'rollup-plugin-terser';
export default {
  input: "lib/index.js",
  output: [
    {
      file: "dist/node/cli/index.js",
      format: 'cjs',
      interop: false
      //sourcemap: true
    }
  ],
  plugins: [
    terser()
  ]
}
