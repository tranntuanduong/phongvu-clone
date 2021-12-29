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
  color: ${colors.text}
`