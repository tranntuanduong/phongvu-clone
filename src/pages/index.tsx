import Section from '@components/Elements/Section';
import { StyledTitle } from '@components/ProductList/ProductList';
import {
  generalBanner1,
  generalBanner2,
  productList,
  shortBanner1,
  shortBanner2,
  shortBanner3,
  shortBanner4
} from 'dummydata';
import Container from 'layouts/container';
import Page from 'layouts/page';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Product } from 'types';

const DynamicGeneralBannerWithNoSSR = dynamic(() => import('@components/Banner/GeneralBanner'),
  { ssr: false }
);
const DynamicPromoteBannerWithNoSSR = dynamic(() => import('@components/Banner/PromoteBanner'),
  { ssr: false }
);
const DynamicShortBannerWithNoSSR = dynamic(() => import('@components/Banner/ShortBanner'),
  { ssr: false }
);
const DynamicMainSliderWithNoSSR = dynamic(() => import('@components/MainSlider'),
  { ssr: false }
);
const DynamicPaginationWithNoSSR = dynamic(() => import('@components/Pagination'),
  { ssr: false }
);
const DynamicProductListWithNoSSR = dynamic(() => import('@components/ProductList'),
  { ssr: false }
);

interface Props {
  productList: Product[]
}

const Home: NextPage<Props> = () => {
  // const { productList } = props;
  return (
    <Page>
      <DynamicMainSliderWithNoSSR />
      <Container>
        <Section>
          <DynamicPromoteBannerWithNoSSR />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner1} />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner2} title="Thương hiệu nổi bật" />
        </Section>
        <Section>
          <DynamicGeneralBannerWithNoSSR generalBanners={generalBanner1} />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner3} />
        </Section>
        <Section>
          <DynamicGeneralBannerWithNoSSR generalBanners={generalBanner2} />
        </Section>
        <Section>
          <DynamicShortBannerWithNoSSR images={shortBanner4} />
        </Section>
        <DynamicProductListWithNoSSR productList={productList} >
          <StyledTitle>
            Dành cho bạn
          </StyledTitle>
        </DynamicProductListWithNoSSR>
        <DynamicPaginationWithNoSSR />
      </Container>
    </Page>
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