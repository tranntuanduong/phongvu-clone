import { colors } from './../../../theme/colors';
import styled from 'styled-components';
import { fontSizes } from '@theme/fontSizes';

export const StyledPromoteBanner = styled.div`
  & .link {
    text-decoration: none;
  }

  & .tab {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  & .tab-item {
    flex: 1;
    padding: 8px 16px;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: ${colors.textGrey};
    background-color: ${colors.whiteColor};

    &__title {
      font-size: ${fontSizes.subtitle};
      font-weight: bold;
    }

    &__subtitle {
      font-size: ${fontSizes.desc1};
      margin-top: 8px;
      font-weight: bold;
    }
  }

  & .tab-item--active {
    color: ${colors.whiteColor};
  }

  & .tab-item--underlined {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
  }

  & .content {
    width: 100%;
    height: 326px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;

    & .promotion-time {
      color: ${colors.whiteColor};
      text-align: center;
      margin: 0 33px ;
      padding-top: 40px;
  

      &__title {
        font-size: ${fontSizes.body1};
        font-weight: bold;
        margin-bottom: 14px;

        & span {
          font-size: ${fontSizes.subtitle}
        }
      }

      &__block {
        display: flex;
        justify-content: center;
      }

      &__block-item {
        padding: 10px;
        font-size: ${fontSizes.subtitle};
        font-weight: bold;
        margin: 0 4px;
        border-radius: 5px;
        background-image: linear-gradient(rgb(74, 74, 74), rgb(35, 34, 34));
      }
    }


    & .view-all {
      position: absolute;
      top: 0;
      right: 0;
      padding: 12px 16px;

      font-size: ${fontSizes.body2};
      color: ${colors.whiteColor};
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;

      &__icon {
        font-size: 20px;
      }
    }

    & .product-list-wrap {
      overflow: hidden;
    }
  }
`

export const StyledProductList = styled.ul`
  display: flex;
  /* justify-content: space-evenly; */
  margin-top: 45px;
  width: max-content;
  & .product-item {
    background-color: ${colors.whiteColor};
    margin: 0 6px;
    border-radius: 10px;
    overflow: hidden;
    width: 155px;
    padding: 16px;
  }
`