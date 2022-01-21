import { fontSizes } from './../../theme/fontSizes';
import styled from 'styled-components';
import { colors } from '@theme/colors';
export const StyledBuildPcDialog = styled.div`
  min-width: 700px;

  & .title {
    font-size: ${fontSizes.subtitle2};
    color: ${colors.text};
    font-weight: 600;
    padding: 16px;
    position: relative;

    &::after {
      content: '';
      width: 3px;
      height: 24px;
      background-color: ${colors.text};
      position: absolute;
      top: 10px;
      left: 0;
    }
  }

  & .filter {
    padding: 0 16px;
  }
`;

export const StyledListElectronic = styled.ul`
  color: ${colors.text};
  padding: 8px 16px;
  height: 347px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(109, 109, 109, 0.576);
  }

  &::-webkit-scrollbar-track {
    background-color: #acacac06;
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 6px inset;
  }
`;

export const StyledItemElectronic = styled.li`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 10px;

  & + & {
    border-top: 1px solid ${colors.border};
  }

  & .thumb {
    width: 64px;
    height: 64px;
    border: 1px solid ${colors.border};
    border-radius: 10px;
  }

  & .name-wrap {
    flex: 1;
    & .name {
      font-size: ${fontSizes.desc1};
      margin-bottom: 8px;
    }

    & .sku {
      font-size: ${fontSizes.desc1};
      color: ${colors.textGrey};
    }
  }

  & .price-wrap {
    width: max-content;
    font-size: ${fontSizes.desc1};

    & .promote-price {
      color: ${colors.primaryColor};
      font-size: ${fontSizes.subtitle2};
      font-weight: 600;
    }

    & .wrap {
      display: flex;
      column-gap: 10px;
      margin-top: 8px;
    }

    & .origanal-price {
      text-decoration: line-through;
      color: ${colors.textGrey};
    }

    & .promote-percent {
      color: ${colors.emeraldGreen};
    }
  }
`;
