import { fontSizes } from '@theme/fontSizes';
import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledPagination = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  & .icon {
    color: ${colors.textGrey};
    font-size: 20px;
  }

  & .dot {
    background-color: transparent;
    border-color: transparent;
  }
`;

export const StyledPaginationItem = styled.li`
  background-color: ${colors.whiteColor};
  border: 0.5px solid ${colors.border};
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  border-radius: 4px;
  color: ${colors.text};
  font-size: ${fontSizes.desc1};
  cursor: pointer;
  user-select: none;

  &.active {
    background-color: ${colors.primaryColor};
    color: ${colors.whiteColor};
  }
`;
