import Section from "@components/Elements/Section";
import ProductOverview from "@components/ProductDetails/Overview";
import SEO from "@components/SEO";
import Container from "layouts/container";
import Grid from "layouts/Grid";
import Page from 'layouts/page';
import dynamic from "next/dynamic";
import { Fragment } from "react";

// component dung du lieu tu get sever side moi can dynamic
const DynamicBreadCrumbWithNoSSR = dynamic(() => import('@components/BreadCrumb'),
  { ssr: false }
);

const breadCrumbs = [
  {
    name: "Card màn hình",
    link: "query=card man hinh"
  }
]

const ProductDetails = () => {
  return (
    <Page>
      <SEO title="Phong vũ clone" description="card-man-hinh-vga-msi-rtx-3080-ti-ventus" />
      <Container mt="20px" >
        <DynamicBreadCrumbWithNoSSR breadCrumbs={breadCrumbs} current="GTX 3080" />
        <Section>
          <Grid container gap="10px">
            <Grid item sx={9}>
              <ProductOverview />
            </Grid>
            <Grid item sx={3}>
              <ProductOverview />
            </Grid>
          </Grid>
        </Section>
      </Container>
    </Page>
  )
}

export default ProductDetails;