import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';
import { StyledBox } from 'styles';
import { CustomScrollBar } from 'styles/CustomScrollBar';

export const StyledHeader = styled.div`
  background-color: ${colors.whiteColor};
  box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 10%);
  position: sticky;
  top: 0px;
  z-index: 10;

  &.zoomout {
    /* transform: translateY(-16px); */
    height: 72px;
    transition: all 0.25s;

    & .search {
      transform: translateY(6px);
    }

    & .logo {
      transform: translateY(6px);
    }

    & .header-content {
      padding: 0;
    }
  }

  & .header-content {
    display: flex;
    align-items: center;
    padding: 14px 0;
  }

  & .search {
    margin-left: 16px;
    background-color: ${colors.whitesmoke};
    padding: 10px 0;
    border-radius: 5px;
    display: flex;
    position: relative;
    flex: 1;

    & input {
      outline: none;
      border: none;
      background-color: transparent;
      width: calc(100% - 60px);
      margin: 0 8px;
      font-size: ${fontSizes.body1};
    }

    &__icon {
      background-color: ${colors.primaryColor};
      color: ${colors.whiteColor};
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      padding: 0 12px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      user-select: none;
    }
  }
`;

export const StyledLogoMenu = styled.div`
   display: flex:
    align-items: center;
    transform: translateY(10px);

    & .menu {
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 5px;
      height: 30px;
      border: 0.5px solid ${colors.logoMenuBorder};
      margin-left: 20px;
      cursor: pointer;
    }

    &:hover .menu {
      background-color: ${colors.whitesmoke}
    }

    & .menu-icon {
      margin-right: 4px;
      font-size: 20px;
      color: ${colors.textGrey};
    }

    & .menu-title {
      font-size: ${fontSizes.body2};
      color: ${colors.textGrey};
    }

    & .portfolio-industry {
      position: absolute;
      z-index: 1;
      top: 52px;
      left: 0;
    }
`;

export const StyledSearchHisory = styled(StyledBox)`
  /* box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 10%);
    background-color: ${colors.whiteColor};
    border: 0.5px solid ${colors.border};
    border-radius: 5px; */
  padding: 16px 12px 12px 12px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;

  &::after {
    content: '';
    position: absolute;
    top: -11px;
    left: 0;
    width: 100%;
    height: 18px;
  }

  & .history-title {
    display: flex;
    justify-content: space-between;

    &__text {
      color: ${colors.textGrey};
      font-weight: 600;
      font-size: ${fontSizes.body1};
    }

    &__action {
      color: ${colors.textGrey};
      font-size: ${fontSizes.body2};
      &:hover {
        color: ${colors.primaryColor};
        cursor: pointer;
      }
    }
  }
  & .history-list {
    margin-top: 8px;
  }

  & .history-item {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.whitesmoke};
    }

    &__icon {
      color: ${colors.textGrey};
    }

    & p {
      margin-left: 8px;
      flex: 1;
      color: ${colors.text};
      font-size: ${fontSizes.body2};
      text-overflow: ellipsis;
      /* Needed to make it work */
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

export const StyledNavItem = styled.ul`
  display: flex;
  margin-left: 16px;
  /* margin: 0 -20px 0 12px; */

  &.zoomout {
    transform: translateY(22px);
    & .nav-item__text {
      visibility: hidden;
      /* height: 0; */
    }

    & .nav-item__icon {
      /* transform: translateY(8px); */
    }
  }

  & .nav-item {
    width: max-content;
    padding: 4px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${fontSizes.desc1};
    font-weight: 600;
    color: ${colors.textGrey};
    position: relative;

    &__wrap {
      color: ${colors.textGrey};
      text-decoration: none;
      display: flex;
      align-items: center;
      flex-direction: column;

      &:hover {
        color: ${colors.primaryColor};
        cursor: pointer;
      }
    }

    &__link {
      color: ${colors.textGrey};
      text-decoration: none;
      display: flex;
      align-items: center;
      flex-direction: column;

      &:hover {
        color: ${colors.primaryColor};
      }
    }

    &__icon {
      font-size: 26px;
    }

    &__text {
      margin-top: 14px;
    }

    &__quantity {
      position: absolute;
      top: -8px;
      right: 22px;
      color: ${colors.whiteColor};
      width: 16px;
      height: 16px;
      background-color: ${colors.hotline};
      font-size: ${fontSizes.desc2};
      line-height: 16px;
      text-align: center;
      border-radius: 50%;
    }
  }
`;

export const StyledUserActions = styled(StyledBox)`
  position: absolute;
  /* box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 10%);
    background-color: ${colors.whiteColor};
    border: 0.5px solid ${colors.border};
    border-radius: 5px; */
  top: 68px;
  padding-top: 8px;
  width: max-content;
  z-index: 10;

  &.zoomout {
    top: 44px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -11px;
    width: 100%;
    height: 18px;
  }

  & .top {
    display: flex;
    padding: 4px 8px 0 8px;

    &__icon {
      font-size: 26px;
      margin-right: 16px;
    }

    &__title {
      font-size: ${fontSizes.body1};
      color: ${colors.text};
    }
  }

  & .detail-list {
    margin-top: 14px;
  }

  & .detail-item {
    display: flex;
    padding: 12px 8px;
    position: relative;

    &:hover {
      background-color: ${colors.whitesmoke};
      cursor: pointer;
    }

    &:hover .sub-list-wrap {
      display: block;
    }

    &__icon {
      font-size: 16px;
      margin-right: 8px;
    }

    &__text {
      display: flex;

      & .img {
        margin-left: 8px;
      }

      color: ${colors.text};
      font-size: ${fontSizes.body2};
      font-weight: 300;
    }
  }

  & .logout-btn {
    padding: 8px;
    min-width: 230px;
  }
`;

export const StyledSubList = styled(StyledBox)`
  position: absolute;
  top: 0;
  right: -200px;
  padding: 8px 0;
  min-width: 200px;
  display: none;

  & .sub-list {
    background-color: ${colors.whiteColor};
    font-weight: 300;
    color: ${colors.text};
    font-size: ${fontSizes.body1};

    &__item {
      padding: 8px 8px;
      display: flex;

      & .img {
        margin-right: 8px;
      }

      &:hover {
        background-color: ${colors.whitesmoke};
        cursor: pointer;
      }
    }
  }
`;

export const StyledNotify = styled(StyledBox)`
  position: absolute;
  top: 68px;
  right: 0;
  min-width: 380px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.zoomout {
    top: 44px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -11px;
    width: 100%;
    height: 18px;
  }

  & img {
    width: 130px;
  }

  & span {
    color: ${colors.textGrey};
    font-weight: 300;
    margin-top: 20px;
  }
`;

export const StyledCard = styled(StyledBox)`
  width: max-content;
  max-width: 400px;
  padding: 16px;
  position: absolute;
  top: 68px;
  right: 0;

  & a {
    text-decoration: none;
  }

  &.zoomout {
    top: 44px;
  }

  & .list {
    border-bottom: 2px dashed ${colors.border};
    max-height: 288px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
      display: none;
    }

    &:hover::-webkit-scrollbar {
      display: block;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(109, 109, 109, 0.576);
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #acacac06;
    }
  }

  & .item {
    text-decoration: none;
    display: flex;
    margin-bottom: 16px;

    &::after {
      content: '';
      position: absolute;
      top: -11px;
      width: 100%;
      height: 18px;
    }

    &__img {
      width: 78px;
      height: 78px;
      margin-right: 8px;
      border: 0.5px solid ${colors.border};
      border-radius: 5px;
    }

    &__content {
      margin-top: 2px;
    }

    &__content-title {
      color: ${colors.text};
      font-weight: 300;
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &:hover .item__content-title {
      color: ${colors.primaryColor};
    }

    &__content-quantity {
      margin-top: 2px;
      color: ${colors.textGrey};
      font-weight: 300;
      line-height: 1.4;
      font-size: ${fontSizes.desc1};
    }

    &__content-price {
      margin-top: 2px;
      color: ${colors.text};
      font-weight: bold;
      line-height: 1.4;
      font-size: ${fontSizes.desc1};
    }
  }

  & .count {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    text-align: center;

    &__quantity {
      color: ${colors.text};
      font-size: ${fontSizes.desc1};
      font-weight: 300;
    }

    &__price {
      font-weight: bold;
      color: ${colors.text};
      font-size: ${fontSizes.subtitle};
    }
  }
`;
