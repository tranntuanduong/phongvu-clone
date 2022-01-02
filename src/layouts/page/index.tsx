import UserContextProvider from 'contexts/UserContext';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic'

const DynamicTopContactWithNoSSR = dynamic(
  () => import('@components/Contact/TopContact'),
  { ssr: false }
)

const DynamicHeaderWithNoSSR = dynamic(
  () => import('@components/Header'),
  { ssr: false }
)

const DynamicFooterWithNoSSR = dynamic(
  () => import('@components/Footer'),
  { ssr: false }
)

const DynamicShadowWithNoSSR = dynamic(
  () => import('@components/Elements/Shadow'),
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
      <DynamicHeaderWithNoSSR />
      {children}
      <DynamicFooterWithNoSSR />
      <DynamicShadowWithNoSSR />
    </UserContextProvider>
  );
}

export default PageLayout;
