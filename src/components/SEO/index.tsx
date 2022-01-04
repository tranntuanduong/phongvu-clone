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
      <meta name="description" content={description} />
      <meta
        property="og:image"
        content="/access/prroducts/card/2.jpg"
        data-svelte="svelte-1u4aq0n"
      />
    </Head>
  );
};

export default SEO;
