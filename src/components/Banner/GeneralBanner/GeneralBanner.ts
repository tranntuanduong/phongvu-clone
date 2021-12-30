import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledGeneralBannerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledGeneralBanner = styled.div`
  background-color: ${colors.whiteColor};
  border-radius: 10px;
  flex: 1;
  overflow: hidden;


  &.general + &.general {
    margin-left: 16px;
  } 
 

  & .general-top {
    display: flex;
    justify-content: space-between;
    padding: 16px;


    &__title {
      color: ${colors.text};
      font-size: ${fontSizes.subtitle};
      font-weight: 600;
    }

    &__link {
      display: flex;
      align-items: center;
      color: ${colors.textGrey};
      text-decoration: none;
    }

    &__icon {
      font-size: 20px;
    }
  }

  & .general-content {
    height: 370px;
    display: flex;

    & .content-left {
      height: 100%;

      &__img {
        height: 100%;
        width: 185px;
        object-fit: cover;
      }
    }

    & .content-right {
      margin-top: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }


  }

`