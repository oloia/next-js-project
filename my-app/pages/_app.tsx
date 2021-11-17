import '../styles/globals.css'
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>My top is the best of the best top</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
