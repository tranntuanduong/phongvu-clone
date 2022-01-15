import Button from '@components/Elements/Button';
import Paper from '@components/Elements/Paper';
import FormLabel from '@components/Form/FormLabel';
import TextField from '@components/Form/TextField';
import { StyledAccountOrder } from './AccountOrder';

const AccountOrder = () => {
  return (
    <Paper borderRadius="10px" padding="16px">
      <StyledAccountOrder>
        <form action="" className="form">
          <FormLabel>
            <label htmlFor="fullName">Họ tên</label>
            <TextField type="text" placeholder="Full name" name="fullName" />
          </FormLabel>
          <FormLabel>
            <label>Email</label>
            <TextField type="text" disabled value="tranntuanduong@gmail.com" />
          </FormLabel>
          <FormLabel>
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <TextField type="text" name="phoneNumber" />
          </FormLabel>
          <FormLabel>
            <label htmlFor="Ngày sinh">Ngày sinh</label>
            <TextField type="date" name="phoneNumber" />
          </FormLabel>
          <FormLabel>
            <label htmlFor="Ngày sinh">Giới tính</label>
            <div className="options">
              <div className="option">
                <label htmlFor="male">Nam</label>
                <TextField type="radio" id="male" name="phoneNumber" />
              </div>
              <div className="option">
                <label htmlFor="female">Nữ</label>
                <TextField type="radio" id="female" name="phoneNumber" />
              </div>
              <div className="option">
                <label htmlFor="other">Khác</label>
                <TextField type="radio" id="other" name="phoneNumber" />
              </div>
            </div>
          </FormLabel>
          <Button size="small" mt={20} width='120px'>Cập nhật</Button>
        </form>
      </StyledAccountOrder>
    </Paper>
  );
};

export default AccountOrder;
