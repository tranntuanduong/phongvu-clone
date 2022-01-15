import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

export const StyledAccountOrder = styled.div`
  width: 100%;

  & .label {
    font-size: ${fontSizes.body2};
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 8px;
  }

  & .options {
    display: flex;
  }

  & .option {
    margin-top: 8px;
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: flex-start;

    & label {
      font-weight: 400;
    }
  }
`;
