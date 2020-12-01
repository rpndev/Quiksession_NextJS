/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Calendar from "@material-ui/icons/CalendarToday";
import LocationOn from "@material-ui/icons/LocationOn";
import BookHistory from "@material-ui/icons/Book";
// core components/views for Admin layout
// import DashboardPage from "./views/Dashboard/Dashboard.js";

const dashboardRoutes = [
  [
    {
      path: "/user",
      name: "User Profile",
      icon: Person,
      layout: "/User",
    },
    {
      path: "/studios",
      name: "Studio Lists",
      icon: LibraryBooks,
      layout: "/User",
    },
    {
      path: "/calendar",
      name: "Calendar",
      icon: Calendar,
      layout: "/User",
    },
    {
      path: "/history",
      name: "Booking History",
      icon: BookHistory,
      layout: "/User",
    },
  ],

  [
    {
      path: "/user",
      name: "User Profile",
      icon: Person,
      layout: "/User",
    },
    {
      path: "/studios",
      name: "Studio Lists",
      icon: LibraryBooks,
      layout: "/User",
    },
    {
      path: "/maps",
      name: "Maps",
      icon: LocationOn,
      layout: "/User",
    },
    {
      path: "/history",
      name: "Booking History",
      icon: BookHistory,
      layout: "/User",
    },
  ],
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
