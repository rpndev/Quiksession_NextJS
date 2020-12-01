import React, { useState, useContext } from "react";
import { Provider } from "../context";
import CheckoutModal from "../components/CheckoutModal.js";
import Layout from "../components/Layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [isOpen, setOpen] = useState(false);

  const Root = () => {
    return (
      <Layout>
        <Component {...pageProps} />
        <CheckoutModal isOpen={isOpen} onClose={() => setOpen(false)} />
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
