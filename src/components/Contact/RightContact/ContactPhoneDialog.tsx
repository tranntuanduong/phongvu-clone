/* eslint-disable react/display-name */
import Dialog from '@components/Elements/Dialog';
import Divider from '@components/Elements/Divider';
import Paper from '@components/Elements/Paper';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import TextField from '@components/Form/TextField';
import Button from '@components/Elements/Button';

interface Props {
  onClose: () => void;
}

const ContactPhoneDialog = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClose } = props;

  return (
    <Dialog>
      <div ref={ref}>
        <Paper borderRadius="10px" padding="24px">
          <StyledContactPhoneDialog>
            <div className="title">Liên hệ với chúng tôi theo hotline:</div>
            <div className="contact-item">
              <img src="/access/contact/phone-me.png" alt="" className="contact-item__icon" />
              <div className="wrap">
                <div className="contact-item__text">Tư vấn mua hàng (24/24)</div>
                <div className="contact-item__number">1900 1000</div>
                <Divider size="small" margin="16px 0 8px 0" />
              </div>
            </div>
            <div className="contact-item">
              <img src="/access/contact/phone-me.png" alt="" className="contact-item__icon" />
              <div className="wrap">
                <div className="contact-item__text">CSKH - Khiếu nại (8h-21h)</div>
                <div className="contact-item__number">1900 2000</div>
                <Divider size="small" margin="16px 0" />
              </div>
            </div>
            <div className="sub-title">
              Hoặc vui lòng để lại số điện thoại, chúng tôi sẽ gọi lại sau.
            </div>
            <div className="contact-wrap">
              <TextField placeholder="Số điện thoại của bạn..." />
              <Button size="medium">Yêu cầu gọi lại</Button>
            </div>
            <div className="close-btn" onClick={onClose}>
              <AiFillCloseCircle />
            </div>
          </StyledContactPhoneDialog>
        </Paper>
      </div>
    </Dialog>
  );
});

const StyledContactPhoneDialog = styled.div`
  color: ${colors.text};
  position: relative;

  & .title {
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  & .sub-title {
    font-size: ${fontSizes.subtitle2};
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  & .wrap {
    flex: 1;
  }

  & .contact-wrap {
    display: flex;
    column-gap: 10px;
  }

  & .contact-item {
    display: flex;
    align-items: flex-start;
    margin-top: 16px;

    &__icon {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border: 1px solid ${colors.organge};
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 0 3px 10px 0 rgb(25 25 25 / 16%);
    }

    &__text {
      font-size: ${fontSizes.subtitle2};
      font-weight: 600;
    }

    &__number {
      font-size: ${fontSizes.body1};
      color: ${colors.textGrey};
      margin-top: 8px;
    }
  }

  & .close-btn {
    position: absolute;
    top: -35px;
    right: -15px;
    color: ${colors.text};
    font-size: 24px;
    cursor: pointer;
  }
`;

export default ContactPhoneDialog;
