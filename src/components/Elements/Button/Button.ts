import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledButton = styled.div`
  background-color: ${(props) =>
    props.theme.btnBgColor};
  text-align: center;
  color: ${(props) =>
    props.theme.btnTextColor};
  padding: ${(props) =>
    props.theme.size};
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${(props) =>
    `${props.theme.mt}px`};

  &:hover {
    /* background-color: ${(props) =>
    props.theme.btnBgColor}; */
    opacity: 0.9;
  }
`;
