import React, { useState, useContext } from "react";
import { Provider } from "../context";
import Layout from "../components/Layout.js";
import "../styles/index.css";

function MyApp(props) {
  MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  };

  const { Component, pageProps } = props;

  const Root = () => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  return (
    <Provider>
      <Root />
    </Provider>
  );
}

export default MyApp;
