import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import ProductDescription from '@components/ProductDetails/Description';
import ProductOverview from '@components/ProductDetails/Overview';
import ProductPolicy from '@components/ProductDetails/Policy';
import ProductSpecifications from '@components/ProductDetails/Specifications';
import SEO from '@components/SEO';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import Page from 'layouts/page';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

// component dung du lieu tu get sever side moi can dynamic
const DynamicBreadCrumbWithNoSSR = dynamic(() => import('@components/BreadCrumb'), { ssr: false });

const breadCrumbs = [
  {
    name: 'Card màn hình',
    link: 'query=card man hinh',
  },
];

// card-man-hinh-vga-msi-rtx-3080-ti-ventus

const ProductDetails = () => {
  return (
    <Page>
      <SEO
        title="Phong vũ clone | details"
        description="Card màn hình VGA MSI RTX 3080 Ti ventus"
      />
      <Container mt="20px">
        <DynamicBreadCrumbWithNoSSR breadCrumbs={breadCrumbs} current="GTX 3080" />
        <Section>
          <Grid container gap="16px">
            <Grid item sx={9}>
              <ProductOverview />
            </Grid>
            <Grid item sx={3}>
              <ProductPolicy />
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Paper borderRadius="10px">
            <Grid container gap="16px">
              <Grid item sx={8}>
                <ProductDescription />
              </Grid>
              <Grid item sx={4}>
                <ProductSpecifications />
              </Grid>
            </Grid>
          </Paper>
        </Section>
      </Container>
    </Page>
  );
};

export default ProductDetails;
