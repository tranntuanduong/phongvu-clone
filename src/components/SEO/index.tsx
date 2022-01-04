import Head from 'next/head';

export interface SEOProps {
  title: string;
  description: string;
}

const SEO = (props: SEOProps) => {
  const { title, description } = props;

  return (
    <Head>
      {/* <title>{title}</title>
      <link rel="shortcut icon" href="/access/logo/short-logo.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/access/products/giadung/giadung1.jpg" />
      <meta property="og:url" content="https://phongvu-clone.netlify.app/" /> */}

      <title>Phong vũ clone | search</title>
      <meta name="description" content="Bàn phím cơ keychorn" />

      <meta itemProp="name" content="Phong vũ clone | search" />
      <meta itemProp="description" content="Bàn phím cơ keychorn" />
      <meta
        itemProp="image"
        content="https://phongvu-clone.netlify.app/search?query=keychorn//access/products/giadung/giadung1.jpg"
      />

      <meta property="og:url" content="https://phongvu-clone.netlify.app/search?query=keychorn" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Phong vũ clone | search" />
      <meta property="og:description" content="Bàn phím cơ keychorn" />
      <meta
        property="og:image"
        content="https://phongvu-clone.netlify.app/search?query=keychorn//access/products/giadung/giadung1.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Phong vũ clone | search" />
      <meta name="twitter:description" content="Bàn phím cơ keychorn" />
      <meta
        name="twitter:image"
        content="https://phongvu-clone.netlify.app/search?query=keychorn//access/products/giadung/giadung1.jpg"
      />
    </Head>
  );
};

export default SEO;
