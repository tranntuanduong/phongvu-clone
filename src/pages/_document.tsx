/* eslint-disable react/no-unknown-property */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }



  render() {
    return (
      <Html>
        <Head>
          {/* <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700,900;1,400;1,600;1,700,900&display=swap"
              rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
