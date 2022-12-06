import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* View and Basic Info */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="Admin" />
          <meta name="copyright" content="Copyright owner" />

          {/* SEO */}
          <meta name="robots" content="follow" />

          {/* PWA */}
          <link rel="manifest" href={"/manifest.json"} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta name="application-name" content="Spacious Skies Campgrounds" />
          <meta name="apple-mobile-web-app-status-bar-style" content="white" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="apple-mobile-web-app-title"
            content="Spacious Skies Campgrounds"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />

          {/* Icons  */}
          <meta
            name="msapplication-TileImage"
            content="/api/images/icon?width=144"
          />
          <link rel="apple-touch-icon" href="/api/images/icon?width=188" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
