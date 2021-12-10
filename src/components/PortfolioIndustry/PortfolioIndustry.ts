import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';
import { StyledBox } from 'styles';

export const StyledProductPortfolio = styled(
  StyledBox
)`
  z-index: 1;
  background-color: ${colors.whiteColor};
  margin-top: 20px;
  max-width: 200px;

  & .intrustry-list {
    color: ${colors.whiteColor};
    padding: 4px 0;
  }

  & .industry-item {
    display: flex;
    padding: 4px 8px;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: ${colors.whitesmoke};
      border-radius: 5px;
    }

    &__icon {
      color: ${colors.textGrey};
      font-size: 24px;
      margin-right: 8px;
    }

    &__name {
      color: ${colors.text};
      font-size: ${fontSizes.desc2};
      width: 100%;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
