import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render ():JSX.Element {
    return (
      <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
