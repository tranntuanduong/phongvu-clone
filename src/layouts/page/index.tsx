import UserContextProvider from 'contexts/UserContext';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import GlobalStyle from 'styles/GlobalStyle';

const DynamicHeaderWithNoSSR = dynamic(() => import('@components/Header'), { ssr: false });

const DynamicTopContactWithNoSSR = dynamic(() => import('@components/Contact/TopContact'), {
  ssr: false,
});

const DynamicFooterWithNoSSR = dynamic(() => import('@components/Footer'), { ssr: false });

const DynamicShadowWithNoSSR = dynamic(() => import('@components/Elements/Shadow'), { ssr: false });

interface PageProps {
  children?: ReactNode;
  home?: boolean;
}

function PageLayout(props: PageProps) {
  const { children, home } = props;

  return (
    <UserContextProvider>
      <div>vi tri quang cao...</div>
      <DynamicTopContactWithNoSSR />
      <DynamicHeaderWithNoSSR home={home} />
      {children}
      <DynamicFooterWithNoSSR />
      <DynamicShadowWithNoSSR />
    </UserContextProvider>
  );
}

export default PageLayout;
