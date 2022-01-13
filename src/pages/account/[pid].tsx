import AccountMenu from '@components/Account/AccountMenu';
import Section from '@components/Elements/Section';
import SEO from '@components/SEO';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import Page from 'layouts/page';
import { useRouter } from 'next/router';

const Account = () => {
  const { query } = useRouter();

  // render main component
  const renderPid = () => {
    const { pid } = query;
    switch (pid) {
      case 'info':
        return <>Thông tin tài khoản</>;
      case 'orders':
        return <>Quản lý đơn hàng</>;
      case 'addresses':
        return <>Sổ địa chỉ</>;
      case 'notification':
        return <>Thông báo của bạn</>;
      case 'news':
        return <>Quản lý thông báo</>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <SEO title="Phong vũ | Account" description="Đây là desc của trang chủ" />
      <Container>
        <Section>
          <Grid container>
            <Grid item sx={4}>
              <AccountMenu />
            </Grid>
            <Grid item sx={4}>
              {renderPid()}
            </Grid>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Account;
