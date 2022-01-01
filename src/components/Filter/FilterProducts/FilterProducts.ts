import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledFilterProducts = styled.div`
  padding: 16px;
  border-radius: 10px;
  background-color: ${colors.whiteColor};
  
  & .title {
    font-size: ${fontSizes.subtitle};
    color: ${colors.text};
    font-weight: 600;
    position: relative;
    padding-bottom: 16px;

    &::after {
      content: "";
      position: absolute;
      top: -2px;
      left: -16px;
      width: 3px;
      height: 24px;
      background-color: ${colors.text};
    }
  }

  & .filter-list {
    margin-top: 20px;
  }
`

