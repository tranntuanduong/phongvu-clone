import Loading from '@components/Loading';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import '../styles/main.css';
import '../styles/Nprogress.css'
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }: AppProps) {

  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      NProgress.start();
      // console.log("start");
      // setLoading(true);
    };
    const end = () => {
      NProgress.done();
      // console.log("findished");
      // setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);


  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
