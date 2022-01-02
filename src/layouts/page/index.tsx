// import TopContact from '@components/Contact/TopContact';
import Shadow from '@components/Elements/Shadow';
import Footer from '@components/Footer';
import Header from '@components/Header';
import UserContextProvider from 'contexts/UserContext';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic'

const DynamicTopContactWithNoSSR = dynamic(
  () => import('@components/Contact/TopContact'),
  { ssr: false }
)

interface PageProps {
  children?: ReactNode;
}

function PageLayout(props: PageProps) {
  const { children } = props;

  return (
    <UserContextProvider>
      <div>vi tri quang cao...</div>
      <DynamicTopContactWithNoSSR />
      <Header />
      {children}
      <Footer />
      <Shadow />
    </UserContextProvider>
  );
}

export default PageLayout;
