import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/global.css',
  namespace: 'stencil-starter-on',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  plugins: [
    sass()
  ],
  devServer: {
    initialLoadUrl: 'ON-your-styleguide',
  },
};
