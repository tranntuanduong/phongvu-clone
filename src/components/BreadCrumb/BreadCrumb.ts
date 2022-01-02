import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledBreadCrumb = styled.div`
  display: flex;

  & .item {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    cursor: pointer;
    user-select: none;
    text-decoration: none;

    &__icon {
      font-size: 20px;
      height: 20px;
    }

    &:hover {
      text-decoration: underline;
    }

    &.current {
      font-weight: 600;
      text-decoration: none;
      cursor: default;
    }
  }
`