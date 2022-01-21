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
import FormLabel from '@components/Form/FormLabel';

interface Props {
  onClose: () => void;
}

const ContactMailDialog = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClose } = props;

  return (
    <Dialog>
      <div ref={ref}>
        <Paper borderRadius="10px" padding="24px">
          <StyledContactPhoneDialog>
            <div className="title">Để lại lời nhắn tại đây, chúng tôi sẽ liên hệ bạn sớm nhất!</div>
            <FormLabel>
              <label htmlFor="fullName">Họ tên</label>
              <TextField name="fullName" />
            </FormLabel>

            <FormLabel>
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <TextField name="phoneNumber" />
            </FormLabel>

            <FormLabel>
              <label htmlFor="email">Email</label>
              <TextField name="email" />
            </FormLabel>

            <FormLabel>
              <label htmlFor="note">Lời nhắn</label>
              <TextField name="note" type="textarea" />
            </FormLabel>

            <FormLabel>
              <label htmlFor="Ngày sinh">Yêu cầu</label>
              <div className="options">
                <div className="option">
                  <TextField type="radio" id="1" name="reason" />
                  <label htmlFor="1" className="reason">
                    Tư vấn mua hàng
                  </label>
                </div>
                <div className="option">
                  <TextField type="radio" id="2" name="reason" />
                  <label htmlFor="2" className="reason">
                    CSKH - Khiếu nại
                  </label>
                </div>
                <div className="option">
                  <TextField type="radio" id="3" name="reason" />
                  <label htmlFor="3" className="reason">
                    Kỹ thuật - Bảo hành
                  </label>
                </div>
              </div>
            </FormLabel>

            <div className="sub-title">
              Vui lòng chọn nhu cầu hỗ trợ của bạn. Nếu thắc mắc về đơn hàng, vui lòng ghi chú thêm
              mã đơn + thông tin cần hỗ trợ về đơn hàng tại lời nhắn *
            </div>

            <Button size="medium">Gửi ngay</Button>
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
  max-width: 500px;

  & .title {
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 20px;
    line-height: 1.5;
  }

  & .sub-title {
    font-size: ${fontSizes.body2};
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.5;
  }

  & .wrap {
    flex: 1;
  }

  & .close-btn {
    position: absolute;
    top: -35px;
    right: -15px;
    color: ${colors.text};
    font-size: 24px;
    cursor: pointer;
  }

  & .options {
  }

  & .option {
    margin-top: 8px;
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: flex-start;

    & label {
      font-weight: 400;
    }

    & .reason {
      margin-left: 10px;
    }
  }
`;

export default ContactMailDialog;
