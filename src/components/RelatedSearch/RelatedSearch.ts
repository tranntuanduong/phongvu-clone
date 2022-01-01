import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledRelatedSearch = styled.div`
  padding: 16px;
  border-radius: 10px;
  background-color: ${colors.whiteColor};

  & .title { 
    font-size: ${fontSizes.body1};
    color: ${colors.text};
    font-weight: 600;
  }

  & .list {
    display: flex;
    font-size: ${fontSizes.body2};
    margin-top: 10px;
    color: ${colors.text};
  }

  /* & .item {
    margin-left: 10px;
    padding: 8px 16px;
    border: 1px solid ${colors.border};
    border-radius: 5px;

    &:hover {
      background-color: ${colors.whitesmoke};
      cursor: pointer;
    }
  } */
`