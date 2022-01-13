import AccountMenu from '@components/Account/AccountMenu';
import AccountInfo from '@components/Account/AccountPage/AccountInfo';
import AccountOrder from '@components/Account/AccountPage/AccountOrder';
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
        return <AccountOrder />;
      case 'orders':
        return <AccountInfo />
      case 'addresses':
        return <>Sổ địa chỉ</>;
      case 'notification':
        return <>Thông báo của bạn</>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <SEO title="Phong vũ | Account" description="Đây là desc của trang chủ" />
      <Container>
        <Section>
          <Grid container gap="16px">
            <Grid item sx={3}>
              <AccountMenu />
            </Grid>
            <Grid item sx={9}>
              {renderPid()}
            </Grid>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Account;
