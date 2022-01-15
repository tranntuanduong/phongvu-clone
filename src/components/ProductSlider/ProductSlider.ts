import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

export const StyledProductSlider = styled.div`
  border-radius: 10px;
  padding: 16px;
  background-color: ${colors.whiteColor};

  &:hover .carousel-btn {
    display: block;
  }

  & .header {
    display: flex;
    justify-content: space-between;
    & .title {
      font-size: ${fontSizes.subtitle};
      font-weight: 600;
      color: ${colors.text};
    }

    & .link {
      color: ${colors.textGrey};
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: ${fontSizes.body2};
    }
  }

  & .list {
    margin-top: 20px;
    position: relative;

    & .card {
      padding: 8px;
    }
  }
`;
