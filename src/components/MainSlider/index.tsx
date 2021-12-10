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
import { useEffect, useRef, useState } from 'react';
import ShortBanner from '@components/ShortBanner';

const imageCollection = [
  "banner12.jpg",
  "banner1.jpg",
  "banner2.jpg",
  "banner3.jpg",
  "banner4.jpg",
  "banner5.jpg",
  "banner6.jpg",
  "banner7.jpg",
  "banner12.jpg",
  "banner1.jpg",
  "banner2.jpg",
  "banner3.jpg",
  "banner4.jpg",
  "banner5.jpg",
  "banner6.jpg",
  "banner7.jpg"
]
// "banner-n1.jpg",
//   "banner-n2.jpg",
//   "banner-n4.jpg",
//   "banner-n5.jpg",
const bannerBottomAdvertise = [
  {
    imageUrl: "banner-n1.jpg",
    link: "#",
  },
  {
    imageUrl: "banner-n2.jpg",
    link: "#",
  },
  {
    imageUrl: "banner-n4.jpg",
    link: "#",
  },
  {
    imageUrl: "banner-n5.jpg",
    link: "#",
  },{
    imageUrl: "banner-n6.jpg",
    link: "#",
  },
  {
    imageUrl: "banner-n7.jpg",
    link: "#",
  }
]

function MainSlider() {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const bannerTimeout = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevClickHandler = () => {
    if (sliderIndex === 0) {
      setSliderIndex(imageCollection.length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  }

  const nextClickHandler = () => {
    if (sliderIndex === imageCollection.length - 1) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  }

  const handleClickDotSlider = (index: number) => {
    setSliderIndex(index);
  }

  useEffect(() => {
    bannerTimeout.current = setInterval(() => {
      nextClickHandler();
    }, 5000);

    return () => {
      if (bannerTimeout.current) {
        clearInterval(bannerTimeout.current);
      }
    }
  }, [sliderIndex])

  return (
    <StyledMainSlider>
      <Container>
        <div className="top">
          <PortfolioIndustry />
          <div className="banner">
            <div className="banner__btn-prev" onClick={prevClickHandler}>
              <BiChevronLeft className="banner__btn-icon" />
            </div>
            <div className="banner__btn-next" onClick={nextClickHandler}>
              <BiChevronRight className="banner__btn-icon" />
            </div>
            <ul className="banner__dot">
              {imageCollection.map((img, index) => (
                <li
                  onClick={() => handleClickDotSlider(index)}
                  key={index}
                  className={index === sliderIndex
                    ? "banner__dot-item banner__dot-item--active"
                    : "banner__dot-item"}>
                </li>
              ))}
            </ul>
          </div>
          <Link href="https://phongvu.vn/promo/diengiadung?pv_source=homepage&pv_medium=de-main-banner&pv_campaign=">
            <a>
              <img
                src={`/access/banner/${imageCollection[sliderIndex]}`}
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
          <ShortBanner images={bannerBottomAdvertise}  />
        </StyledBottomAdvertise>
      </Container>
    </StyledMainSlider>
  );
}
export default MainSlider;
