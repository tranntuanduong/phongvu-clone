import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledMainSlider = styled.div`
  width: 100%;
  height: 566px;
  position: relative;
  margin-bottom: 100px;

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
      opacity: 0;
    }

    &__btn-next {
      opacity: 0;
    }

    &__btn-icon {
      color: ${colors.whiteColor};
      font-size: 25px;
    }

    &__dot {
      z-index: 1;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
    }

    &__dot-item {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${colors.bannerBtnBackground};
      cursor: pointer;
      margin: 0 4px;
      transition: 0.3s ease 0s;

    }

    &__dot-item--active {
      background-color: ${colors.primaryColor};
      width: 20px;
      border-radius: 20px;
    }
  }
  &:hover .banner__btn-prev,
  &:hover .banner__btn-next {
    opacity: 1;
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
    border-radius: 10px;

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
  z-index: 1;
  max-width: 1216px;
  width: 100%;
  height: 140px;
  position: absolute;
  right: auto;
  left: auto;
  bottom: -70px;
  border-radius: 10px;
`;
