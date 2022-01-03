import SEO from '@components/SEO';
import { productList } from 'dummydata';
import Page from 'layouts/page';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
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
const DynamicContainerWithNoSSR = dynamic(() => import('layouts/container'),
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
      <SEO title="Phong vũ clone" description="Bàn phím cơ keychorn" />
      <DynamicContainerWithNoSSR mt="20px" >
        <DynamicBreadCrumbWithNoSSR breadCrumbs={[]} current="Tìm kiếm" />
        <DynamicRelatedSearchWithNoSSR />
        <DynamicFilterProductsWithNoSSR />
        <DynamicProductListWithNoSSR productList={productList}>
          < DynamicSortProductsWithNoSSR />
        </DynamicProductListWithNoSSR>
        <DynamicPaginationWithNoSSR />
      </DynamicContainerWithNoSSR>
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
