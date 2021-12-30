import { colors } from 'theme/colors';
import styled from 'styled-components';
import { fontSizes } from '@theme/fontSizes';
// import { colors } from "../../../theme";

export const StyledTopContact = styled.div`
  background-color: ${colors.primaryColor};
  height: 42px;
  color: ${colors.whiteColor};
  z-index: 2;

  & .list {
    height: 100%;
    max-width: 1216px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & .element {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.desc1};
    height: 100%;
    padding: 0 8px;
    margin-left: 20px;
    cursor: pointer;

    &__link {
      color: ${colors.whiteColor};
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    &__icon {
      font-size: ${fontSizes.title};
      margin-right: 8px;
    }

    & span {
      color: ${colors.hotline};
      font-weight: 700;
      margin-left: 4px;
    }
  }
`;
