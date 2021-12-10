import PortfolioIndustry from '@components/PortfolioIndustry';
import Container from 'layouts/container';
import {
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';
import {
  StyledBottomAdvertise,
  StyledMainSlider,
  StyledRightAdvertise,
} from './MainSlider';
import Link from 'next/Link';

function MainSlider() {
  return (
    <StyledMainSlider>
      <Container>
        <div className="top">
          <PortfolioIndustry />
          <div className="banner">
            <div className="banner__btn-prev">
              <BiChevronLeft className="banner__btn-icon" />
            </div>
            <div className="banner__btn-next">
              <BiChevronRight className="banner__btn-icon" />
            </div>
          </div>
          <Link href="https://phongvu.vn/promo/diengiadung?pv_source=homepage&pv_medium=de-main-banner&pv_campaign=">
            <a>
              <img
                src="/access/banner/banner12.jpg"
                alt=""
                className="banner__img"
              />
            </a>
          </Link>
          <StyledRightAdvertise>
            <Link href="https://phongvu.vn">
              <a className="ad-img-wrap">
                <img
                  src="/access/advertise/ad2.jpg"
                  alt=""
                  className="ad-img"
                />
              </a>
            </Link>
            <Link href="https://phongvu1.vn">
              <a className="ad-img-wrap">
                <img
                  src="/access/advertise/ad3.jpg"
                  alt=""
                  className="ad-img"
                />
              </a>
            </Link>
          </StyledRightAdvertise>
        </div>
        <StyledBottomAdvertise>
          StyledBottomAdvertise
        </StyledBottomAdvertise>
      </Container>
    </StyledMainSlider>
  );
}
export default MainSlider;
