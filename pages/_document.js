import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='bg-mobile bg-no-repeat bg-contain bg-violet md:bg-desktop'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument