import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

export const StyledProductOverview = styled.div`
  padding: 24px;
  border-radius: 10px;
  background-color: ${colors.whiteColor};
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 15px;
`;

export const StyledImageConllection = styled.div`
  width: 100%;
  aspect-ratio: 1;

  & .main {
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  }

  & .list {
    display: flex;
    width: 100%;

    & .item {
      background-size: contain;
      background-repeat: no-repeat;
      width: 20%;
      aspect-ratio: 1;
      border: 1px solid ${colors.whiteColor};

      &:hover {
        cursor: pointer;
      }
    }

    & .item--active {
      border: 1px solid ${colors.primaryColor};
      border-radius: 5px;
    }
  }

  & .sub-info {
    margin-top: 40px;
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    margin-left: 16px;

    &__item {
      margin-top: 8px;
    }
  }
`;

export const StyledOverview = styled.div`
  & .title {
    font-size: ${fontSizes.title};
    color: ${colors.text};
    font-weight: 600;
    line-height: 1.2;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & .brand-wrap {
    display: flex;
    margin-top: 8px;
  }

  & .brand {
    color: ${colors.textGrey};
    font-size: ${fontSizes.body2};
    position: relative;

    & span {
      color: ${colors.primaryColor};
    }

    &::after {
      content: '|';
      margin: 0px 8px;
    }
  }

  & .sku {
    color: ${colors.textGrey};
    font-size: ${fontSizes.body2};

    & span {
      color: ${colors.primaryColor};
    }
  }

  & .quantity {
    color: ${colors.quantityProduct};
    font-size: ${fontSizes.body2};
    margin-top: 20px;
  }

  & .price {
    color: ${colors.primaryColor};
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    margin-top: 14px;
  }

  & .price--promote {
    color: ${colors.textGrey};
    font-size: ${fontSizes.body2};
    margin-top: 8px;
    text-decoration: line-through;
  }

  & .btn-wrap {
    display: flex;
    font-weight: 600;
    font-size: ${fontSizes.body2};

    & .btn {
      flex: 1;

      & + div {
        margin-left: 8px;
      }
    }
  }

  & .gift-title {
    font-size: ${fontSizes.subtitle2};
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 10px;
  }
`;

export const StyledPromote = styled.div`
  & .title {
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    font-weight: 600;
  }

  & .list {
    list-style: disc;
    margin-left: 30px;
    margin-top: 16px;
    font-size: ${fontSizes.body2};
    color: ${colors.text};

    & .item {
      margin-top: 10px;
      line-height: 1.4;

      & .voucher {
        font-weight: 600;
        margin: 0 4px;
      }

      & .promote-up {
        color: ${colors.hotline};
        font-weight: 600;
        margin: 0 4px;
      }

      & .link {
        color: ${colors.primaryColor};
        text-decoration: none;
        margin-left: 4px;
      }
    }
  }
`;

export const StyledAdvertise = styled.div`
  margin-top: 16px;
  & .banner-item {
    margin-top: 10px;
    display: block;

    &__img {
      width: 100%;
      height: 100%;
      max-height: 300px;
      object-fit: cover;
      border-radius: 5px;
      display: block;
    }
  }
`;

export const StyledGift = styled.div`
  margin-top: 20px;

  & .jun-gift {
    display: flex;
    align-items: center;
    border: 1px solid ${colors.border};
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${colors.whitesmoke};

    &__thumb {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      border: 1px solid ${colors.border};
      border-radius: 2px;
    }

    &__quantity {
      color: ${colors.textGrey};
      font-size: ${fontSizes.desc2};
      margin-right: 8px;
    }

    &__name {
      color: ${colors.text};
      font-size: ${fontSizes.desc2};
    }
  }
`;

export const StyledCouponGift = styled.div`
  font-size: ${fontSizes.body2};
  color: ${colors.text};
  margin-bottom: 20px;

  & .coupon-wrap {
    border: 1px solid ${colors.primaryColor};
    border-radius: 5px;
    padding: 16px;
    position: relative;
    overflow: hidden;
    display: flex;
  }

  & .gift-icon {
    margin-right: 8px;
  }

  & .name {
    font-weight: 600;
  }

  & .desc {
    margin-top: 16px;

    & span {
      font-weight: 600;
    }
  }

  & .label {
    width: 36px;
    height: 36px;
    border-style: solid;
    border-width: 0 36px 36px 0;
    border-color: transparent ${colors.primaryColor} transparent transparent;

    position: absolute;
    top: 0;
    right: 0;

    &__icon {
      color: ${colors.whiteColor};
      position: absolute;
      font-size: 20px;
      top: 2px;
      left: 16px;
      /* transform: translate(-50%, -50%); */
    }
  }
`;
