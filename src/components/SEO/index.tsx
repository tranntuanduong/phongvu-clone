import Head from 'next/head';

export interface SEOProps {
  title: string;
  description: string;
}

const SEO = (props: SEOProps) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/access/logo/short-logo.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/access/products/giadung/giadung1.jpg" />
      <meta property="og:url" content="https://phongvu-clone.netlify.app/" />
    </Head>
  );
};

export default SEO;
