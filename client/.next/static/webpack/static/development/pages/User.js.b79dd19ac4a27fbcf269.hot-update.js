webpackHotUpdate("static\\development\\pages\\User.js",{

/***/ "./components/user/Template/Sidebar/Sidebar.js":
/*!*****************************************************!*\
  !*** ./components/user/Template/Sidebar/Sidebar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Navbars/AdminNavbarLinks.js */ "./components/user/Template/Navbars/AdminNavbarLinks.js");
/* harmony import */ var _Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Navbars/RTLNavbarLinks.js */ "./components/user/Template/Navbars/RTLNavbarLinks.js");
/* harmony import */ var _assets_jss_material_dashboard_react_components_sidebarStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/sidebarStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/sidebarStyle.js");


/*eslint-disable*/



 // @material-ui/core components







 // core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_material_dashboard_react_components_sidebarStyle_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
function Sidebar(props) {
  var classes = useStyles(); // verifies if routeName is the one active (in browser input)

  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  var color = props.color,
      logo = props.logo,
      image = props.image,
      logoText = props.logoText,
      routes = props.routes;
  var links = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.list
  }, routes.map(function (prop, key) {
    var activePro = " ";
    var listItemClasses;
    listItemClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, " " + classes[color], activeRoute(prop.layout + prop.path)));
    var whiteFontClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, " " + classes.whiteFont, activeRoute(prop.layout + prop.path)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: prop.layout + prop.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: activePro + classes.item,
      activeClassName: "active",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      button: true,
      className: classes.itemLink + listItemClasses
    }, typeof prop.icon === "string" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.itemIconRTL, props.rtlActive))
    }, prop.icon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(prop.icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.itemIconRTL, props.rtlActive))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      primary: props.rtlActive ? prop.rtlName : prop.name,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemText, whiteFontClasses, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.itemTextRTL, props.rtlActive)),
      disableTypography: true
    }))));
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "temporary",
    anchor: props.rtlActive ? "left" : "right",
    open: props.open,
    classes: {
      paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.drawerPaperRTL, props.rtlActive))
    },
    onClose: props.handleDrawerToggle,
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sidebarWrapper
  }, props.rtlActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_13__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_12__["default"], null), links), image !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.background
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__["default"], {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    anchor: props.rtlActive ? "right" : "left",
    variant: "permanent",
    open: true,
    classes: {
      paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.drawerPaperRTL, props.rtlActive))
    }
  }, image !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.background
  }) : null)));
}
Sidebar.propTypes = {
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleDrawerToggle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  logoText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ })

})
//# sourceMappingURL=User.js.b79dd19ac4a27fbcf269.hot-update.js.map