import { fontSizes } from '@theme/fontSizes';
import { colors } from './../../../theme/colors';
import styled from 'styled-components';

export const StyledSpecifications = styled.div`
  padding: 16px;
  border-radius: 10px;
  /* background-color: ${colors.whiteColor}; */
  color: ${colors.text};
  line-height: 1.3;

  & .title {
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    padding-bottom: 30px;
  }

  & .list {
    max-height: 632px;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      bottom: 0px;
      width: 100%;
      height: 40px;
      position: absolute;
      background: linear-gradient(0deg, rgb(254, 254, 255) 0%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 100%);
    }
  }

  & .item {
    display: flex;
    padding: 12px 16px;

    &:nth-child(even) {
      background-color: ${colors.whitesmoke};
    }
  }

  & .label {
    font-size: ${fontSizes.desc1};
    flex: 2 1 0%;
  }

  & .name {
    font-size: ${fontSizes.desc1};
    flex: 3 1 0%;
    margin-left: 8px;
  }

  & .subtitle {
    padding: 12px 16px;
    font-size: ${fontSizes.desc1};
    color: ${colors.textGrey};
    font-weight: 600;
  }

  & .readmore {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSizes.desc1};
    color: ${colors.primaryColor};
    margin-top: 20px;
    cursor: pointer;

    & .icon {
      color: ${colors.textGrey};
      font-size: 18px;
      line-height: 0;
    }
  }

  & .dialog {
    width: 700px;
    padding: 16px;

    & .header {
      font-weight: 600;
      margin-bottom: 20px;
      text-align: center;
      font-size: ${fontSizes.subtitle};
    }
  }
`;


export const StyledProductSpecificationsDetails = styled.div`

`