import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledButton = styled.div`
  background-color: ${(props) => props.theme.btnBgColor};
  border: 1px solid transparent;
  text-align: center;
  color: ${(props) => props.theme.btnTextColor};
  padding: ${(props) => props.theme.size};
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${(props) => `${props.theme.mt ?? 0}px`};
  width: ${(props) => props.theme.width ?? 'auto'};
  &:hover {
    /* background-color: ${(props) => props.theme.btnBgColor}; */
    opacity: 0.9;
  }
`;

export const StyledOutLineButton = styled.div`
  background-color: ${colors.whiteColor};
  border: 1px solid ${(props) => props.theme.btnBgColor ?? colors.primaryColor};
  text-align: center;
  color: ${(props) => props.theme.btnBgColor ?? colors.primaryColor};
  padding: ${(props) => props.theme.size};
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${(props) => `${props.theme.mt ?? 0}px`};
  width: ${(props) => props.theme.width ?? 'auto'};
  &:hover {
    /* background-color: ${(props) => props.theme.btnBgColor}; */
    opacity: 0.9;
  }
`;
