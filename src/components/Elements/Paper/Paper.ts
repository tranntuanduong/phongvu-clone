import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledPaper = styled.div`
  background-color: ${colors.whiteColor};
  border-radius: ${(props) => props.theme.borderRadius ?? '0px'};
  padding: ${(props) => props.theme.padding ?? '0px'};
  overflow: hidden;
`;
