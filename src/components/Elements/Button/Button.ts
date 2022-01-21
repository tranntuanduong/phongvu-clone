import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

export const StyledButton = styled.div`
  background-color: ${(props) => props.theme.btnBgColor};
  border: 1px solid transparent;
  text-align: center;
  color: ${(props) => props.theme.btnTextColor ?? colors.primaryColor};
  border-color: ${(props) => props.theme.btnTextColor ?? colors.primaryColor};
  padding: ${(props) => props.theme.size};
  border-radius: 5px;
  cursor: pointer;
  margin: ${(props) => props.theme.margin ?? '0px'};
  width: ${(props) => props.theme.width ?? 'auto'};
  font-size: ${fontSizes.body2};
  user-select: none;
  &:hover {
    /* background-color: ${(props) => props.theme.btnBgColor}; */
    opacity: 0.9;
  }
  flex-shrink: 0;
`;

export const StyledOutLineButton = styled.div`
  background-color: ${colors.whiteColor};
  border: 1px solid ${(props) => props.theme.btnBgColor ?? colors.primaryColor};
  text-align: center;
  color: ${(props) => props.theme.btnTextColor ?? colors.primaryColor};
  border-color: ${(props) => props.theme.btnTextColor ?? colors.primaryColor};
  padding: ${(props) => props.theme.size};
  border-radius: 5px;
  cursor: pointer;
  margin: ${(props) => props.theme.margin ?? '0px'};
  width: ${(props) => props.theme.width ?? 'auto'};
  font-size: ${fontSizes.body2};
  user-select: none;
  &:hover {
    /* background-color: ${(props) => props.theme.btnBgColor}; */
    opacity: 0.9;
  }
  flex-shrink: 0;
`;
