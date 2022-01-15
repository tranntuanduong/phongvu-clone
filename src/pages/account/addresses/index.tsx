import AccountMenu from '@components/Account/AccountMenu';
import Button from '@components/Elements/Button';
import Dialog from '@components/Elements/Dialog';
import Divider from '@components/Elements/Divider';
import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import FormLabel from '@components/Form/FormLabel';
import TextField from '@components/Form/TextField';
import SEO from '@components/SEO';
import { colors } from '@theme/colors';
import useOnClickOutside from 'hooks/useOnclickOutside';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import { useRef, useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { StyledAccountTitle, StyledAddAddressBtn, StyledAddressDialog, StyledFullScreen } from 'styles/AccountPage';

const AccountAddresses = () => {
  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  const ref = useRef(null);

  const handleOpenAddressDialog = () => {
    setOpenAddressDialog(true);
  }

  const handleCloseDialogDetails = () => {
    setOpenAddressDialog(false);
  };

  useOnClickOutside(ref, handleCloseDialogDetails);

  return (
    <StyledFullScreen>
      <SEO title="Phong vũ | Account" description="Đây là desc của trang chủ" />
      <Container>
        <Section>
          <Grid container gap="16px">
            <Grid item sx={3}>
              <AccountMenu />
            </Grid>
            <Grid item sx={9}>
              <StyledAccountTitle >
                <h5 className="title">
                  Sổ địa chỉ
                </h5>
              </StyledAccountTitle>
              <StyledAddAddressBtn onClick={handleOpenAddressDialog}>
                <div className="icon">
                  <BsBell />
                </div>
                <div className="text">Thêm địa chỉ mới</div>
              </StyledAddAddressBtn>
            </Grid>
          </Grid>
        </Section>
      </Container>
      {openAddressDialog && (
        <Dialog>
          <Paper borderRadius="10px" >
            <StyledAddressDialog ref={ref}>
              <div className="title">
                Thông tin người nhận hàng
              </div>
              <Grid container gap="16px">
                <Grid item sx={12}>
                  <FormLabel>
                    <label htmlFor="fullName">Họ tên</label>
                    <TextField placeholder="Nhập tên của bạn" name="fullName" />
                  </FormLabel>
                </Grid>
                <Grid item sx={6}>
                  <FormLabel>
                    <label htmlFor="phoneNumber">Số điện thoại</label>
                    <TextField placeholder="Nhập số điện thoại" name="phoneNumber" />
                  </FormLabel>
                </Grid>
                <Grid item sx={6}>
                  <FormLabel>
                    <label htmlFor="email">Email</label>
                    <TextField placeholder="Nhập email của bạn" name="email" />
                  </FormLabel>
                </Grid>
              </Grid>
              <Divider size="small" margin="20px 0px" />
              <div className="title">
                Địa chỉ nhận hàng
              </div>
              <Grid container gap="16px">
                <Grid item sx={12}>
                  <FormLabel>
                    <label htmlFor="fullName">Họ tên</label>
                    <TextField placeholder="Nhập tên của bạn" name="fullName" />
                  </FormLabel>
                </Grid>
                <Grid item sx={6}>
                  <FormLabel>
                    <label htmlFor="phoneNumber">Số điện thoại</label>
                    <TextField placeholder="Nhập số điện thoại" name="phoneNumber" />
                  </FormLabel>
                </Grid>
                <Grid item sx={6}>
                  <FormLabel>
                    <label htmlFor="email">Email</label>
                    <TextField placeholder="Nhập email của bạn" name="email" />
                  </FormLabel>
                </Grid>
              </Grid>

              <div className="btn-wrap">
                <Button
                  size="medium" variant="outline" margin="0 10px 0 0"
                  onClick={handleCloseDialogDetails}>
                  Hủy bỏ
                </Button>
                <Button size="medium" bgColor={colors.textGrey}>Lưu địa chỉ</Button>
              </div>
            </StyledAddressDialog>
          </Paper>
        </Dialog>
      )}
    </StyledFullScreen>
  );
};



export default AccountAddresses;
