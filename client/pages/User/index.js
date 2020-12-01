import React, { useEffect, useState, createRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../../components/user/Template/Navbars/Navbar.js";
import Footer from "../../components/user/Template/Footer/Footer.js";
import Sidebar from "../../components/user/Template/Sidebar/Sidebar.js";

import mainRoutes from "../../components/user/routes.js";

import styles from "../../components/user/assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../../public/img/sidebar-2.jpg";
import logo from "../../public/img/reactlogo.png";

let ps;

const switchRoutes = (routes) => (
  <>
    {/* {routes &&
      routes.map((prop, key) => {
        if (prop.layout === "/User") {
          return <Link href={`/User/${prop.path}`} key={key} />;
        }
        return null;
      })} */}
  </>
);

const useStyles = makeStyles(styles);

export default function User({ ...rest }) {
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();
  const [routes, setRoutes] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const getRoute = () => {
  //   if (window.location.pathname === "/user/maps") history.push("/StudiosMap");
  //   return window.location.pathname !== "/user/maps";
  // };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  const router = useRouter();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && auth.user && auth.user.role) {
      if (auth.user.role === "owner") {
        setRoutes(mainRoutes[0]);
      } else if (auth.user.role === "artist") setRoutes(mainRoutes[1]);
    } else {
      router.push("/login");
    }
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps = new PerfectScrollbar(mainPanel.current, {
    //     suppressScrollX: true,
    //     suppressScrollY: false,
    //   });
    //   document.body.style.overflow = "hidden";
    // }
    // window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    // return function cleanup() {
    //   if (navigator.platform.indexOf("Win") > -1) {
    //     ps.destroy();
    //   }
    //   window.removeEventListener("resize", resizeFunction);
    // };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      {/* {getRoute() && ( */}
      <Sidebar
        routes={routes}
        logoText={"Creative Tim"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="blue"
        {...rest}
      />
      {/* )} */}

      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {/* {getRoute() && ( */}
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes(routes)}</div>
        </div>
        {/* )} */}
        {/* {getRoute() ? <Footer /> : null} */}
      </div>
    </div>
  );
}
