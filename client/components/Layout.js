import React, { useContext } from "react";
import Header from "./Header";
import { Context } from "../context";

function Layout(props) {
  const { children } = props;
  const { state } = useContext(Context);
  // const { loading, error, auth } = state;
  const newCredit =
    state && state.auth && state.auth.data && state.auth.data.credit;

  return (
    <>
      <Header credits={newCredit} handleModal={() => setOpen(true)} />
      {children}
    </>
  );
}
export default Layout;
