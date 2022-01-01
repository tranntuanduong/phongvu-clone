import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1216px;
  margin-left: auto;
  margin-right: auto;
  
  margin-top: ${props => props.theme.marginTop ?? '0px'}
  /* position: relative; */
`;