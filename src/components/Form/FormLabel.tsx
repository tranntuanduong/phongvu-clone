import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: [ReactNode, ReactNode];
}

const FormLabel = ({ children }: Props) => {
  return <StyledFormLabel>{children}</StyledFormLabel>;
};

const StyledFormLabel = styled.div`
  & + & {
    margin-top: 16px;
  }

  & input,
  & textarea {
    margin-top: 8px;
  }

  & input[type='radio'] {
    margin-top: 0;
    width: auto;
    margin-left: 8px;
  }

  & label {
    font-size: ${fontSizes.body2};
    font-weight: 600;
    color: ${colors.text};
  }
`;

export default FormLabel;
