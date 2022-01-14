import AccountMenu from '@components/Account/AccountMenu';
import AccountAddresses from '@components/Account/AccountPage/AccountAddresses';
import AccountInfo from '@components/Account/AccountPage/AccountInfo';
import AccountNotification from '@components/Account/AccountPage/AccountNotification';
import AccountOrder from '@components/Account/AccountPage/AccountOrder';
import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import SEO from '@components/SEO';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import Page from 'layouts/page';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Account = () => {
  const { query } = useRouter();

  // render main component
  const renderPid = () => {
    const { pid } = query;
    switch (pid) {
      case 'info':
        return (
          <>
            <StyledAccountTitle>Thông tin tài khoản</StyledAccountTitle>
            <AccountOrder />
          </>
        );
      case 'orders':
        return (
          <>
            <StyledAccountTitle>Quản lý đơn hàng</StyledAccountTitle>
            <AccountInfo />
          </>
        );
      case 'addresses':
        return (
          <>
            <StyledAccountTitle>Sổ địa chỉ</StyledAccountTitle>
            <AccountAddresses />
          </>
        );
      case 'notification':
        return (
          <>
            <StyledAccountTitle>Thông báo của bạn</StyledAccountTitle>
            <AccountNotification />
          </>
        );
      default:
        return <></>;
    }
  };

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
              {renderPid()}
            </Grid>
          </Grid>
        </Section>
      </Container>
    </StyledFullScreen>
  );
};

export const StyledAccountTitle = styled.h5`
  color: ${colors.text};
  font-size: ${fontSizes.subtitle};
  font-weight: 600;
  margin-bottom: 16px;
`;

const StyledFullScreen = styled.div`
  height: 70vh;
`;

export default Account;
