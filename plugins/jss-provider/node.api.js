import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core';

import theme from '../../src/theme';

export default () => ({
  beforeRenderToHtml: (App, { meta }) => {
    // eslint-disable-next-line no-param-reassign
    meta.muiSheets = new ServerStyleSheets();

    return meta.muiSheets.collect(
      <ThemeProvider theme={theme}>{App}</ThemeProvider>,
    );
  },

  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
});
