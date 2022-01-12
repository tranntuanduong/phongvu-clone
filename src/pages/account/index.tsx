import Section from '@components/Elements/Section';
import SEO from '@components/SEO';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import Page from 'layouts/page';

const Account = () => {
  return (
    <>
      <SEO title="Phong vũ | Account" description="Đây là desc của trang chủ" />
      <Container>
        <Section>
          <Grid container>
            <Grid item sx={4}>
              <h1>details</h1>
            </Grid>
            <Grid item sx={4}>
              <h1>Thông tin tài khoản</h1>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Account;
