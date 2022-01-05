import { fontSizes } from '@theme/fontSizes';
import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledProductPolicy = styled.div`
  padding: 16px;
  border-radius: 10px;
  background-color: ${colors.whiteColor};

  & .hr {
    border-bottom: 1px dashed ${colors.border};
    margin: 20px 0;
  }

  & .promote {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.body2};
    color: ${colors.greenColor};

    &__desc {
      margin-left: 8px;
    }
  }
`;

export const StyledPolicyContent = styled.div`
  padding-bottom: 16px;

  & .title {
    font-size: ${fontSizes.body1};
    font-weight: 600;
    color: ${colors.text};
    padding-bottom: 16px;
  }

  & .item {
    display: flex;
    color: ${colors.text};
    font-size: ${fontSizes.body2};
    margin-bottom: 10px;
    line-height: 1.25;

    & .icon {
      font-size: 18px;
      margin-right: 10px;
      color: ${colors.secondaryColor};
    }
  }

  & .link {
    font-size: ${fontSizes.body2};
    color: ${colors.secondaryColor};
    margin-left: 28px;
  }
`;

export const StyledAdvertise = styled.div`
  margin-top: 20px;
  width: 100%;
  height: max-content;
  position: relative;

  & .image {
    border-radius: 5px;
    width: 100%;
    max-height: 400px;
    display: block;
  }

  & .time-list {
    position: absolute;
    width: 100%;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    & .time-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      & .time {
        display: flex;
        font-weight: 600;
        justify-content: center;
        margin-bottom: 8px;
        flex-wrap: wrap;

        & .block {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 30px;
          background-color: ${colors.whiteColor};
          font-size: ${fontSizes.subtitle};
          margin: 0 2px;
        }
      }

      & .text {
        text-align: center;
        color: ${colors.whiteColor};
        font-size: ${fontSizes.body1};
        text-transform: uppercase;
      }
    }
  }
`;

