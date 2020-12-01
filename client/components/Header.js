import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import quiksessionLogo from "../public/img/quiksession-logo.png";
import styles from "./Header.module.css";
import { stripeLink, stripeBalance } from "../services";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [credit, setCredit] = useState(0);
  const [balance, setBalance] = useState(0);
  let formattedBalance = "";

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    let role = null;
    if (auth) {
      role = auth.user.role;
      setRole(role);
      setCredit(auth.user.credit);
      setAuthenticated(true);
      const fetchStripeBalance = async () => {
        // const newBalance = await stripeBalance({ userId: auth.user.id });
        // setBalance(newBalance);
      };
      fetchStripeBalance();
    } else {
      setAuthenticated(false);
    }
  }, []);

  if (balance) {
    const locale = new Intl.NumberFormat().resolvedOptions().locale;
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: balance.currency,
    });

    formattedBalance = formatter.format(balance.amount / 100);
  }
  async function handleStripeLink() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const req = await stripeLink({ userId: auth.user.id });
    window.open(req.url);
  }
  const renderContent = () => {
    if (!isAuthenticated) {
      return (
        <Fragment>
          <Link href="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link href="/register">
            <Button color="inherit">Register</Button>
          </Link>
          <Link href="/auth/google">
            <Button color="inherit">Login With Google</Button>
          </Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Link href="/User/studios">
            <Button color="inherit">{role}</Button>
          </Link>
          {role === "artist" && (
            <>
              <Button
                id="payout"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.handleModal();
                }}
              >
                Add Credit
              </Button>
              <span id="credits" key="3" style={{ margin: "0 20px" }}>
                Credits: {credit}
              </span>
            </>
          )}
          {role === "owner" && (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleStripeLink();
                }}
              >
                See Payouts ↗
              </Button>
              <span className="balance">{formattedBalance} </span>
            </>
          )}

          <Link href="/logout">
            <Button color="inherit">Logout</Button>
          </Link>
        </Fragment>
      );
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href={isAuthenticated ? "/User" : "/"}>
          <a style={{ flexGrow: 1 }}>
            <img
              src={quiksessionLogo}
              className={styles.brandLogoImage}
              alt="Quiksession Logo"
            />
          </a>
        </Link>

        {renderContent()}
      </Toolbar>
    </AppBar>
  );
}
