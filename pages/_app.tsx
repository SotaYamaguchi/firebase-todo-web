import React from 'react';
import { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '@/styles/global.css';

import Layout from '@/components/organisms/BaseLayout';

const MyApp = (app: AppProps) => {
  const { Component, pageProps } = app;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
