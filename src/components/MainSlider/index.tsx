import PortfolioIndustry from '@components/PortfolioIndustry';
import Container from 'layouts/container';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { StyledBottomAdvertise, StyledMainSlider, StyledRightAdvertise } from './MainSlider';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ShortBanner from '@components/Banner/ShortBanner';
import NextBtn from '@components/Elements/NextBtn';
import PrevBtn from '@components/Elements/PrevBtn';
import { bannerBottomAdvertise, mainSliderImgs } from 'dummydata';

const imageCollection = mainSliderImgs;

function MainSlider() {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const bannerTimeout = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevClickHandler = () => {
    if (sliderIndex === 0) {
      setSliderIndex(imageCollection.length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };

  const nextClickHandler = () => {
    if (sliderIndex === imageCollection.length - 1) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const handleClickDotSlider = (index: number) => {
    setSliderIndex(index);
  };

  useEffect(() => {
    bannerTimeout.current = setInterval(() => {
      if (sliderIndex === imageCollection.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
    }, 5000);

    return () => {
      if (bannerTimeout.current) {
        clearInterval(bannerTimeout.current);
      }
    };
  }, [sliderIndex]);

  return (
    <StyledMainSlider>
      <Container>
        <div className="top">
          <PortfolioIndustry />
          <div className="banner">
            <div className="banner__btn-prev" onClick={prevClickHandler}>
              <PrevBtn />
            </div>
            <div className="banner__btn-next" onClick={nextClickHandler}>
              <NextBtn />
            </div>
            <ul className="banner__dot">
              {imageCollection.map((img, index) => (
                <li
                  onClick={() => handleClickDotSlider(index)}
                  key={index}
                  className={
                    index === sliderIndex
                      ? 'banner__dot-item banner__dot-item--active'
                      : 'banner__dot-item'
                  }
                ></li>
              ))}
            </ul>
          </div>
          <Link href="#campain">
            <a>
              <img
                src={`/access/banner/${imageCollection[sliderIndex]}`}
                alt=""
                className="banner__img"
              />
            </a>
          </Link>
          <StyledRightAdvertise>
            <Link href="#ad1">
              <a className="ad-img-wrap">
                <img src="/access/advertise/ad2.jpg" alt="" className="ad-img" />
              </a>
            </Link>
            <Link href="#ad2">
              <a className="ad-img-wrap">
                <img src="/access/advertise/ad3.jpg" alt="" className="ad-img" />
              </a>
            </Link>
          </StyledRightAdvertise>
        </div>
        <StyledBottomAdvertise>
          <ShortBanner images={bannerBottomAdvertise} numberItem={4} />
        </StyledBottomAdvertise>
      </Container>
    </StyledMainSlider>
  );
}
export default MainSlider;
