import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
  list-style: none;
  

  & .product-item {
    background-color: ${colors.whiteColor};
    padding: 16px;
  }
`

export const StyledTitleSection = styled.div`
  padding: 0 16px;
  background-color: ${colors.whiteColor};
  margin-bottom: 2px;
  min-height: 54px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
`

export const StyledTitle = styled.div`
  font-size: ${fontSizes.subtitle};
  font-weight: 600;
  color: ${colors.text};
`

export const StyledSortProducts = styled.div`
  height: 64px;
  display: flex;
  align-items: center;

  & .sort-title {
    color: ${colors.text};
    font-size: ${fontSizes.desc1};
    font-weight: 600;
    margin-right: 44px;
  }

  & .sort-title--buildPc {
    color: ${colors.text};
    font-size: ${fontSizes.desc1};
    font-weight: 600;
    margin-right: 10px;
  }

  & .sort-list {
    font-size: ${fontSizes.desc1};
    color: ${colors.text};
    display: flex;
    align-items: center;

    & .chip-wrap {
      align-items: center;
      display: flex;
      margin-left: 20px;

      & .dash {
        margin-right: 8px;
      }
    }
  }

  & .search {
    margin-left: 20px;
  }
`