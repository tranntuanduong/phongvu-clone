import AccountMenu from '@components/Account/AccountMenu';
import Button from '@components/Elements/Button';
import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import FormLabel from '@components/Form/FormLabel';
import TextField from '@components/Form/TextField';
import SEO from '@components/SEO';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import styled from 'styled-components';

const AccountInfo = () => {
  return (
    <StyledFullScreen>
      <SEO title="Phong vũ | Account" description="Đây là desc của trang chủ" />
      <Container>
        <Section>
          <Grid container gap="16px">
            <Grid item sx={3}>
              <AccountMenu />
            </Grid>
            <Grid item sx={6}>
              <StyledAccountTitle>Thông tin tài khoản</StyledAccountTitle>
              <Paper borderRadius="10px" padding="16px">
                <StyledAccountInfo>
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
                    <Button size="medium" margin="20px 0 0 0" width="120px">
                      Cập nhật
                    </Button>
                  </form>
                </StyledAccountInfo>
              </Paper>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </StyledFullScreen>
  );
};

const StyledAccountTitle = styled.h5`
  color: ${colors.text};
  font-size: ${fontSizes.subtitle};
  font-weight: 600;
  margin-bottom: 16px;
`;

const StyledFullScreen = styled.div`
  min-height: 70vh;
`;

const StyledAccountInfo = styled.div`
  width: 100%;

  & .label {
    font-size: ${fontSizes.body2};
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 8px;
  }

  & .options {
    display: flex;
  }

  & .option {
    margin-top: 8px;
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: flex-start;

    & label {
      font-weight: 400;
    }
  }
`;

export default AccountInfo;
