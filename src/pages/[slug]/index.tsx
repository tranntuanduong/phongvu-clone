import BreadCrumb from "@components/BreadCrumb";
import Container from "layouts/container";
import Page from 'layouts/page';

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
        <BreadCrumb breadCrumbs={breadCrumbs} current="GTX 3080" />
      </Container>
    </Page>
  )
}

export default ProductDetails;