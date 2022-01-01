// import GeneralBanner from '@components/Banner/GeneralBanner';
// import PromoteBanner from '@components/Banner/PromoteBanner';
// import ShortBanner from '@components/Banner/ShortBanner';
import Section from '@components/Elements/Section';
import { StyledTitle } from '@components/ProductList/ProductList';
// import MainSlider from '@components/MainSlider';
// import Pagination from '@components/Pagination';
// import ProductList from '@components/ProductList';
import {
  generalBanner1,
  generalBanner2,
  shortBanner1,
  shortBanner2,
  shortBanner3,
  shortBanner4,
} from 'dummydata';
import Container from 'layouts/container';
import Page from 'layouts/page';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicLazyGeneralBanner = dynamic(() => import('@components/Banner/GeneralBanner'));

const DynamicLazyPromoteBanner = dynamic(() => import('@components/Banner/PromoteBanner'));

const DynamicLazyShortBanner = dynamic(() => import('@components/Banner/ShortBanner'));

const DynamicLazyMainSlider = dynamic(() => import('@components/MainSlider'));

const DynamicLazyPagination = dynamic(() => import('@components/Pagination'));

const DynamicLazyProductList = dynamic(() => import('@components/ProductList'));

const Home: NextPage = () => {
  return (
    <Page>
      <DynamicLazyMainSlider />
      <Container>
        <Section>
          <DynamicLazyPromoteBanner />
        </Section>
        <Section>
          <DynamicLazyShortBanner images={shortBanner1} />
        </Section>
        <Section>
          <DynamicLazyShortBanner images={shortBanner2} title="Thương hiệu nổi bật" />
        </Section>
        <Section>
          <DynamicLazyGeneralBanner generalBanners={generalBanner1} />
        </Section>
        <Section>
          <DynamicLazyShortBanner images={shortBanner3} />
        </Section>
        <Section>
          <DynamicLazyGeneralBanner generalBanners={generalBanner2} />
        </Section>
        <Section>
          <DynamicLazyShortBanner images={shortBanner4} />
        </Section>
        <DynamicLazyProductList>
          <StyledTitle>
            Dành cho bạn
          </StyledTitle>
        </DynamicLazyProductList>
        <DynamicLazyPagination />
      </Container>
    </Page>
  );
};

export default Home;
