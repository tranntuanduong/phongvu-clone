import GeneralBanner from '@components/Banner/GeneralBanner';
import PromoteBanner from '@components/Banner/PromoteBanner';
import ShortBanner from '@components/Banner/ShortBanner';
import Section from '@components/Elements/Section';
import MainSlider from '@components/MainSlider';
import Pagination from '@components/Pagination';
import ProductList from '@components/ProductList';
import {
  generalBanner1,
  generalBanner2,
  promoteBanner,
  shortBanner1,
  shortBanner2,
  shortBanner3,
  shortBanner4,
} from 'dummydata';
import Container from 'layouts/container';
import Page from 'layouts/page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Page>
        <MainSlider />
        <Container>
          <Section>
            <PromoteBanner />
          </Section>
          <Section>
            <ShortBanner images={shortBanner1} />
          </Section>
          <Section>
            <ShortBanner images={shortBanner2} title="Thương hiệu nổi bật" />
          </Section>
          <Section>
            <GeneralBanner generalBanners={generalBanner1} />
          </Section>
          <Section>
            <ShortBanner images={shortBanner3} />
          </Section>
          <Section>
            <GeneralBanner generalBanners={generalBanner2} />
          </Section>
          <Section>
            <ShortBanner images={shortBanner4} />
          </Section>
          <ProductList>Dành cho bạn</ProductList>
          <Pagination />
        </Container>
      </Page>
    </>
  );
};

export default Home;
