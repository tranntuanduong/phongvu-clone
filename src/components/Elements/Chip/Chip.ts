import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledChip = styled.div`
  margin-right: ${props => props.theme.marginRight ?? '0px'};
  margin-bottom: ${props => props.theme.marginBottom ?? '0px'};

  padding: 8px 16px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  position: relative;
  border-bottom: ${props => props.theme.borderBottom ?? `1px solid ${colors.border}`};

  &:hover {
    background-color: ${colors.whitesmoke};
    cursor: pointer;
  }

  &.active {
    border-color: ${colors.primaryColor};
  }

  & .tag-active {
    position: absolute;
    top: 0;
    right: 0;
    width: 0px;
    height: 0px;
    color: ${colors.whiteColor};
    border-style: solid;
    border-width: 0px 20px 20px 0px;
    border-color: transparent ${colors.primaryColor} transparent transparent;
  }

  & .icon-active {
    position: absolute;
    top: 0;
    right: 0;
    color: ${colors.whiteColor};
  }

  & .wrap {
    display: flex;
    align-items: center;

    & .icon {
      margin-left: 4px;
    }
  }
 
`