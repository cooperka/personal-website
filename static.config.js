import React from 'react';
import { createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();

// Docs: https://github.com/react-static/react-static/blob/master/docs/config.md
export default {
  plugins: [
    ['react-static-plugin-jss', { providerProps: { generateClassName } }],
  ],

  siteRoot: 'https://cooperka.com',

  getRoutes: () => [
    {
      path: '/',
      component: 'src/components/App/component',
    },
  ],

  /* eslint-disable react/prop-types */
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
        />

        <title>Kevin Cooper</title>

        {/* TODO: Add back favicon, etc. */}
      </Head>

      <Body>
        <noscript>You need to enable JavaScript to run this app.</noscript>

        {children}
      </Body>
    </Html>
  ),
  /* eslint-enable */
};
