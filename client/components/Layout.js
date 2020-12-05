import React, { useContext, useState } from "react";
import Header from "./Header";
import CheckoutModal from "../components/CheckoutModal.js";
import { Context } from "../context";

function Layout(props) {
  const { children } = props;
  const { state } = useContext(Context);
  const [isOpen, setOpen] = useState(false);
  // const { loading, error, auth } = state;
  const newCredit =
    state && state.auth && state.auth.data && state.auth.data.credit;

  return (
    <>
      <Header credits={newCredit} handleModal={() => setOpen(true)} />
      {children}
      <CheckoutModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}
export default Layout;
