import { colors } from './../../../theme/colors';
import styled from 'styled-components';
import { fontSizes } from '@theme/fontSizes';

export const StyledProductDesc = styled.div`
  padding: 16px;
  border-radius: 10px;
  /* background-color: ${colors.whiteColor}; */
  line-height: 1.4;
  color: ${colors.text};


  & .title {
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    padding-bottom: 30px;
  }

  & h3 {
    font-size: ${fontSizes.subtitle2};
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 10px;
  }

  & a {
    color: ${colors.secondaryColor};
    margin-right: 8px;
  }

  & p {
    font-size: ${fontSizes.body2};
    margin-bottom: 16px;

    & b {
      font-weight: 600;
    }

    & a {
      margin: 0 4px;
    }
  }

  & img {
    width: 100%;
    margin-bottom: 10px;
  }
`;
