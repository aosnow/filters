// ------------------------------------------------------------------------------
// name: rollup.config.js
// author: mudas( mschool.tech )
// created: 2020.04.19 上午 0:38
// ------------------------------------------------------------------------------

import delPlug from 'rollup-plugin-delete';
// import vue from 'rollup-plugin-vue';
import pkg from './package.json';

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'packages/index.js',
    external: ['vue', 'moment', 'lodash-es', 'currency.js'],
    plugins: [
      delPlug({ targets: 'dist/*' })
      // vue()
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
