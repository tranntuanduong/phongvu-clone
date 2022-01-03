import Head from 'next/head'

export interface SEOProps {
  title: string;
  description: string;
}

const SEO = (props: SEOProps) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      {/* <link rel="shortcut icon" href="/access/logo/short-logo.svg" /> */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  )
}

export default SEO;