import AccountMenu from '@components/Account/AccountMenu';
import Section from '@components/Elements/Section';
import SEO from '@components/SEO';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import { StyledAccountTitle, StyledFullScreen } from 'styles/AccountPage';

const Notification = () => {
 

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
                  Thông báo
                </h5>
              </StyledAccountTitle>

            </Grid>
          </Grid>
        </Section>
      </Container>

    </StyledFullScreen>
  );
};



export default Notification;
