import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import '../styles/main.css';
import '../styles/Nprogress.css';
import i18nInstance from '@i18n/i18n';
import Page from 'layouts/page';

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });

  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <Page home>
      <I18nextProvider i18n={i18nInstance}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Page>
  );
}

export default MyApp;
