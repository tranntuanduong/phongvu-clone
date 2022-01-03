import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledProductOverview = styled.div`
  padding: 24px;
  border-radius: 10px;
  background-color: ${colors.whiteColor};
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 15px;

  & .hr {
    border-bottom: 1px dashed ${colors.border};
    margin: 20px 0;
  }
`

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

  
`

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
      content: "|";
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

  & .btn-wrap {
    display: flex;
    font-weight: 600;
    font-size: ${fontSizes.body2};
    margin-top: 35px;

    & .btn {
      flex: 1;

      & + div {
        margin-left: 8px;
      }
    }

  }
`

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
`