import Container from "layouts/container";
import Page from 'layouts/page';
import dynamic from "next/dynamic";

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
      <Container mt="20px" >
        <DynamicBreadCrumbWithNoSSR breadCrumbs={breadCrumbs} current="GTX 3080" />
      </Container>
    </Page>
  )
}

export default ProductDetails;