import PromoteBanner from '@components/Banner/PromoteBanner';
import TopContact from '@components/Contact/TopContact';
import MainSlider from '@components/MainSlider';
import Container from 'layouts/container';
import Page from 'layouts/page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Page>
        <MainSlider />
        <Container>
          <PromoteBanner />
        </Container>
      </Page>
    </>
  );
};

export default Home;
