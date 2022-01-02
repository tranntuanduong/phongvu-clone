import { productList } from 'dummydata';
import Container from 'layouts/container';
import Page from 'layouts/page';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Product } from 'types';


const DynamicBreadCrumbWithNoSSR = dynamic(() => import('@components/BreadCrumb'),
  { ssr: false }
);
const DynamicRelatedSearchWithNoSSR = dynamic(() => import('@components/RelatedSearch'),
  { ssr: false }
);
const DynamicProductListWithNoSSR = dynamic(() => import('@components/ProductList'),
  { ssr: false }
);
const DynamicSortProductsWithNoSSR = dynamic(() => import('@components/Sort/SortProducts'),
  { ssr: false }
);
const DynamicPaginationWithNoSSR = dynamic(() => import('@components/Pagination'),
  { ssr: false }
);
const DynamicFilterProductsWithNoSSR = dynamic(() => import('@components/Filter/FilterProducts'),
  { ssr: false }
);


interface Props {
  productList: Product[]
}

const SearchProducts = (props: Props) => {
  const { productList } = props

  const { query } = useRouter();

  console.log("query", query);

  return (
    <Page>
      <Container mt="20px" >
        <DynamicBreadCrumbWithNoSSR breadCrumbs={[]} current="Tìm kiếm" />
        <DynamicRelatedSearchWithNoSSR />
        <DynamicFilterProductsWithNoSSR />
        <DynamicProductListWithNoSSR productList={productList}>
          < DynamicSortProductsWithNoSSR />
        </DynamicProductListWithNoSSR>
        <DynamicPaginationWithNoSSR />
      </Container>
    </Page>
  )
}

export default SearchProducts;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: Product[] = productList;
  return {
    props: {
      productList: data,
    },
  }
}
