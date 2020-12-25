import React from 'react';

// Docs: https://github.com/react-static/react-static/blob/master/docs/config.md
export default {
  plugins: [
    'jss-provider',
    // Waiting on official changes re: https://github.com/react-static/react-static/issues/1179.
    // ['react-static-plugin-jss', { providerProps: { generateClassName } }],
  ],

  siteRoot: 'https://cooperka.com',

  getRoutes: () => [
    {
      path: '/',
      component: 'src/components/App/component',
    },
  ],

  /* eslint-disable react/prop-types */
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />

        <title>Kevin Cooper</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />

        {/* Facebook Open Graph markup: https://developers.facebook.com/tools/debug/og/object/ */}
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://cooperka.com/facebook-preview-v1.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />

        {/* Google Analytics - Global site tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110594588-1" />
        <script type="text/javascript" dangerouslySetInnerHTML={getGoogleAnalyticsScript()} />

        {/* Drip analytics */}
        <script type="text/javascript" dangerouslySetInnerHTML={getDripScript()} />
      </Head>

      <Body>{children}</Body>
    </Html>
  ),
  /* eslint-enable */
};

/** Returns an object that can be passed to `dangerouslySetInnerHTML`. */
const htmlify = (html) => ({
  __html: html,
});

function getGoogleAnalyticsScript() {
  return htmlify(`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-110594588-1');
  `);
}

function getDripScript() {
  return htmlify(`
    var _dcq = _dcq || [];
    var _dcs = _dcs || {};
    _dcs.account = '5568046';

    (function() {
      var dc = document.createElement('script');
      dc.type = 'text/javascript'; dc.async = true;
      dc.src = '//tag.getdrip.com/5568046.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(dc, s);
    })();
  `);
}
