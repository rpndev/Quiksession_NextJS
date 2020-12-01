webpackHotUpdate("static\\development\\pages\\User.js",{

/***/ "./pages/User/index.js":
/*!*****************************!*\
  !*** ./pages/User/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_user_Template_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/user/Template/Navbars/Navbar.js */ "./components/user/Template/Navbars/Navbar.js");
/* harmony import */ var _components_user_Template_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/user/Template/Footer/Footer.js */ "./components/user/Template/Footer/Footer.js");
/* harmony import */ var _components_user_Template_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/user/Template/Sidebar/Sidebar.js */ "./components/user/Template/Sidebar/Sidebar.js");
/* harmony import */ var _components_user_routes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/user/routes.js */ "./components/user/routes.js");
/* harmony import */ var _components_user_assets_jss_material_dashboard_react_layouts_adminStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/user/assets/jss/material-dashboard-react/layouts/adminStyle.js */ "./components/user/assets/jss/material-dashboard-react/layouts/adminStyle.js");
/* harmony import */ var _public_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/img/sidebar-2.jpg */ "./public/img/sidebar-2.jpg");
/* harmony import */ var _public_img_reactlogo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/img/reactlogo.png */ "./public/img/reactlogo.png");




 // creates a beautiful scrollbar


 // @material-ui/core components

 // core components








var ps;

var switchRoutes = function switchRoutes(routes) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(_components_user_assets_jss_material_dashboard_react_layouts_adminStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function User(_ref) {
  var rest = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var classes = useStyles(); // ref to help us initialize PerfectScrollbar on windows devices

  var mainPanel = Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      routes = _useState2[0],
      setRoutes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      mobileOpen = _useState4[0],
      setMobileOpen = _useState4[1];

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }; // const getRoute = () => {
  //   if (window.location.pathname === "/user/maps") history.push("/StudiosMap");
  //   return window.location.pathname !== "/user/maps";
  // };


  var resizeFunction = function resizeFunction() {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  }; // initialize and destroy the PerfectScrollbar plugin


  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var auth = JSON.parse(localStorage.getItem("auth"));

    if (auth && auth.user && auth.user.role) {
      if (auth.user.role === "owner") {
        setRoutes(_components_user_routes_js__WEBPACK_IMPORTED_MODULE_11__["default"][0]);
      } else if (auth.user.role === "artist") setRoutes(_components_user_routes_js__WEBPACK_IMPORTED_MODULE_11__["default"][1]);
    } else {
      router.push("/login");
    } // if (navigator.platform.indexOf("Win") > -1) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_user_Template_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    routes: routes,
    logoText: "Creative Tim",
    logo: _public_img_reactlogo_png__WEBPACK_IMPORTED_MODULE_14__["default"],
    image: _public_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
    handleDrawerToggle: handleDrawerToggle,
    open: mobileOpen,
    color: "blue"
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.mainPanel,
    ref: mainPanel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_user_Template_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    routes: routes,
    handleDrawerToggle: handleDrawerToggle
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container
  }, switchRoutes(routes)))));
}

/***/ })

})
//# sourceMappingURL=User.js.e26305dbcd6d09beddac.hot-update.js.map