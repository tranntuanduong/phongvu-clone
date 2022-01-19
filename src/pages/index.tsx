import Section from '@components/Elements/Section';
import { StyledTitle } from '@components/ProductList/ProductList';
import SEO from '@components/SEO';
import { PageContext } from 'contexts/PageContext';
import {
  generalBanner1,
  generalBanner2,
  productList,
  shortBanner1,
  shortBanner2,
  shortBanner3,
  shortBanner4,
} from 'dummydata';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { Product } from 'types';

const DynamicGeneralBannerWithNoSSR = dynamic(() => import('@components/Banner/GeneralBanner'), {
  ssr: false,
});
const DynamicPromoteBannerWithNoSSR = dynamic(() => import('@components/Banner/PromoteBanner'), {
  ssr: false,
});
const DynamicShortBannerWithNoSSR = dynamic(() => import('@components/Banner/ShortBanner'), {
  ssr: false,
});
const DynamicMainSliderWithNoSSR = dynamic(() => import('@components/MainSlider'), { ssr: false });
const DynamicPaginationWithNoSSR = dynamic(() => import('@components/Pagination'), { ssr: false });
const DynamicProductListWithNoSSR = dynamic(() => import('@components/ProductList'), {
  ssr: false,
});
const DynamicContainerWithNoSSR = dynamic(() => import('layouts/container'), { ssr: false });
const DynamicProductSliderWithNoSSR = dynamic(() => import('@components/ProductSlider'), {
  ssr: false,
});

interface Props {
  productList: Product[];
}

const Home: NextPage<Props> = () => {
  const { handleChangePage } = useContext(PageContext);

  const [page, setPage] = useState(1);

  useEffect(() => {
    handleChangePage(true);
  }, [handleChangePage]);
  // const { productList } = props;

  const handlechangePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <SEO title="Phong vũ clone| Trang chủ" description="Đây là desc của trang chủ" />
      <DynamicMainSliderWithNoSSR />
      <DynamicContainerWithNoSSR>
        <Section>
          <DynamicPromoteBannerWithNoSSR />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner1} numberItem={1} />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR
            images={shortBanner2}
            title="Thương hiệu nổi bật"
            numberItem={4}
          />
        </Section>
        <Section>
          <DynamicGeneralBannerWithNoSSR generalBanners={generalBanner1} />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner3} numberItem={4} />
        </Section>
        <Section>
          <DynamicGeneralBannerWithNoSSR generalBanners={generalBanner2} />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner4} numberItem={3} />
        </Section>
        <Section>
          <DynamicProductSliderWithNoSSR />
        </Section>
        <DynamicProductListWithNoSSR productList={productList}>
          <StyledTitle>Dành cho bạn</StyledTitle>
        </DynamicProductListWithNoSSR>
        <DynamicPaginationWithNoSSR
          total={productList.length}
          page={page}
          onChange={handlechangePage}
          rowPerPage={2}
          pageVisible={8}
        />
      </DynamicContainerWithNoSSR>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data: Product[] = productList;
//   return {
//     props: {
//       productList: data,
//     },
//   }
// }
