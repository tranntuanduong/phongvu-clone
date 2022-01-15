import AccountMenu from '@components/Account/AccountMenu';
import AccountOrderDoneTab from '@components/Account/AccountOrderDoneTab';
import AccountOrderProgressTab from '@components/Account/AccountOrderProgressTab';
import AccountOrderWaitingTab from '@components/Account/AccountOrderWatingTab';
import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import SEO from '@components/SEO';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StyledFullScreen, StyledAccountTitle } from 'styles/AccountPage'


const AccountOrder = () => {
  const router = useRouter();
  const [tab, setTab] = useState<string | string[]>('WAIT_PAYMENT');

  const handleChangeTab = (tab: string) => () => {
    router.push(`/account/orders?tab=${tab}`)
  }

  useEffect(() => {
    const tab = router.query.tab
    if (!tab) return;

    setTab(tab);
  }, [router])

  const renderTab = () => {
    switch (tab) {
      case "WAIT_PAYMENT":
        return <AccountOrderWaitingTab />
      case "DONE":
        return <AccountOrderDoneTab />
      case "PROCESSING":
        return <AccountOrderProgressTab />
      default:
        return <span>tab is incorrect</span>
    }
  }


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
                  Quản lý đơn hàng
                </h5>
                <div className="tabs">
                  <div
                    className={tab === "WAIT_PAYMENT" ? "item item--active" : "item"}
                    onClick={handleChangeTab("WAIT_PAYMENT")}>
                    Chờ thanh toán
                  </div>
                  <div
                    className={tab === "PROCESSING" ? "item item--active" : "item"}
                    onClick={handleChangeTab("PROCESSING")}>
                    Chờ giao hàng
                  </div>
                  <div
                    className={tab === "DONE" ? "item item--active" : "item"}
                    onClick={handleChangeTab("DONE")}>
                    Đã hoàn thành
                  </div>
                </div>
              </StyledAccountTitle>

              <Paper borderRadius="10px" padding="16px">
                {renderTab()}
              </Paper>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </StyledFullScreen >
  );
};



export default AccountOrder;
