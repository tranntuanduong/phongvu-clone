import { fontSizes } from '@theme/fontSizes';
import { colors } from './../../../theme/colors';
import styled from 'styled-components';

export const StyledSpecifications = styled.div`
  padding: 16px;
  border-radius: 10px;
  background-color: ${colors.whiteColor};
  color: ${colors.text};
  line-height: 1.3;

  & .title {
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    padding-bottom: 30px;
  }

  & .item {
    display: flex;
    padding: 12px 16px;

    &:nth-child(even) {
      background-color: ${colors.whitesmoke};
    }
  }

  & .label {
    font-size: ${fontSizes.desc1};
    flex: 2 1 0%;
  }

  & .name {
    font-size: ${fontSizes.desc1};
    flex: 3 1 0%;
    margin-left: 8px;
  }

  & .subtitle {
    padding: 12px 16px;
    font-size: ${fontSizes.desc1};
    color: ${colors.textGrey};
    font-weight: 600;
  }
`;
