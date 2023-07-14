import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const pkg = require('./package.json');

const banner = `/* @license ${pkg.name} v${pkg.version} */`;

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        banner
      },
      {
        dir: pkg.module.replace('/index.js', ''),
        preserveModules: true,
        format: 'esm',
        sourcemap: true,
        banner
      }
    ],
    external: Object.keys(pkg.peerDependencies),
    plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.prod.json' }), terser()]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()]
  }
];
