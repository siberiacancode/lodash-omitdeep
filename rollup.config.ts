import { generateRollupConfig } from '@siberiacancode/builder';

import pkg from './package.json';

export default generateRollupConfig({
  pkg,
  configs: {
    babel: {
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
    }
  }
});
