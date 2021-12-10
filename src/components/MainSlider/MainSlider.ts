import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledMainSlider = styled.div`
  width: 100%;
  height: 566px;
  position: relative;

  & .top {
    display: flex;
    height: 100%;
    flex: 1;
  }

  & .banner__img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
  }

  & .banner {
    flex: 1;
    position: relative;

    &__btn-prev {
      position: absolute;
      top: 50%;
      left: 0;
      width: 50px;
      height: 40px;
      background-color: ${colors.bannerBtnBackground};
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      opacity: 0;
      cursor: pointer;
    }

    &__btn-next {
      position: absolute;
      top: 50%;
      right: 0;
      width: 50px;
      height: 40px;
      background-color: ${colors.bannerBtnBackground};
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      opacity: 0;
      cursor: pointer;
    }

    &__btn-icon {
      color: ${colors.whiteColor};
      font-size: 25px;
    }
  }
  &:hover .banner__btn-prev,
  &:hover .banner__btn-next {
    opacity: 1;
    transition: 0.25s ease-in;
  }
`;

export const StyledRightAdvertise = styled.div`
  margin-top: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;

  & .ad-img-wrap {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
    border-radius: 5px;

    &:hover .ad-img {
      transform: scale(1.05);
    }
  }

  & .ad-img {
    transition: 0.2s ease 0s;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledBottomAdvertise = styled.div`
  color: '#fff';
  z-index: 1;
`;
