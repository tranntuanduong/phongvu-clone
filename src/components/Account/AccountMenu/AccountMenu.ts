import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';
export const StyledAccountMenu = styled.div`
  border-radius: 10px;
  background-color: ${colors.whiteColor};
  padding: 8px;

 

  & .item {
    padding: 10px 8px;
    display: flex;
    align-items: center;

    &__text {
      font-size: ${fontSizes.body2};
      color: ${colors.text};
    }

    &__icon {
      margin-right: 8px;
      color: ${colors.textGrey};
      font-size: 20px;
    }

    &:hover {
      background-color: ${colors.whitesmoke};
      cursor: pointer;

      & .item__text,
      & .item__icon {
        color: ${colors.primaryColor};
      }
    }
  }
  
  & .item.item--active {

    & .item__text, & .item__icon {
      color: ${colors.primaryColor};
    }
  }
`;

export const StyledUser = styled.li`
  padding: 10px 8px;
  display: flex;

  & .avatar {
    font-size: 40px;
    color: ${colors.textGrey};
  }

  & .wrap {
    margin-left: 8px;

    & .title {
      font-size: ${fontSizes.desc1};
      margin-bottom: 8px;
      color: ${colors.textGrey};
    }

    & .name {
      font-size: ${fontSizes.subtitle2};
      color: ${colors.text};
      font-weight: 600;
    }
  }
`;
