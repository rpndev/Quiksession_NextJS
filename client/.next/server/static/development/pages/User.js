module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/user/Template/CustomButtons/Button.js":
/*!**********************************************************!*\
  !*** ./components/user/Template/CustomButtons/Button.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegularButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_jss_material_dashboard_react_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/buttonStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/buttonStyle.js");



 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // material-ui components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(_assets_jss_material_dashboard_react_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function RegularButton(props) {
  var _classNames;

  var classes = useStyles();

  var color = props.color,
      round = props.round,
      children = props.children,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      muiClasses = props.muiClasses,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["color", "round", "children", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]);

  var btnClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.button, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[size], size), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[color], color), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.round, round), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.disabled, disabled), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.simple, simple), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.block, block), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.link, link), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.justIcon, justIcon), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, className, className), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    classes: muiClasses,
    className: btnClasses
  }), children);
}
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  // use this to pass the classes props from Material-UI
  muiClasses: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};

/***/ }),

/***/ "./components/user/Template/CustomInput/CustomInput.js":
/*!*************************************************************!*\
  !*** ./components/user/Template/CustomInput/CustomInput.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_jss_material_dashboard_react_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/customInputStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/customInputStyle.js");




 // @material-ui/core components




 // @material-ui/icons


 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_material_dashboard_react_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function CustomInput(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      success = props.success;
  var labelClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, " " + classes.labelRootError, error), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, classes.underlineError, error), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, classes.underlineSuccess, success && !error), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, classes.underline, true), _classNames2));
  var marginTop = classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.marginTop, labelText === undefined));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formControlProps, {
    className: formControlProps.className + " " + classes.formControl
  }), labelText !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.labelRoot + labelClasses,
    htmlFor: id
  }, labelProps), labelText) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: {
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps)), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.feedback + " " + classes.labelRootError
  }) : success ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.feedback + " " + classes.labelRootSuccess
  }) : null);
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

/***/ }),

/***/ "./components/user/Template/Footer/Footer.js":
/*!***************************************************!*\
  !*** ./components/user/Template/Footer/Footer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_material_dashboard_react_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/footerStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/footerStyle.js");
/*eslint-disable*/

 // @material-ui/core components



 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_assets_jss_material_dashboard_react_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Footer(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.left
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.list
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.inlineBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#home",
    className: classes.block
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.inlineBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#company",
    className: classes.block
  }, "Company")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.inlineBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#portfolio",
    className: classes.block
  }, "Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.inlineBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#blog",
    className: classes.block
  }, "Blog")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA9 ", 1900 + new Date().getYear(), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.creative-tim.com?ref=mdr-footer",
    target: "_blank",
    className: classes.a
  }, "Creative Tim"), ", made with love for a better web"))));
}

/***/ }),

/***/ "./components/user/Template/Navbars/AdminNavbarLinks.js":
/*!**************************************************************!*\
  !*** ./components/user/Template/Navbars/AdminNavbarLinks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminNavbarLinks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../CustomInput/CustomInput.js */ "./components/user/Template/CustomInput/CustomInput.js");
/* harmony import */ var _CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../CustomButtons/Button.js */ "./components/user/Template/CustomButtons/Button.js");
/* harmony import */ var _assets_jss_material_dashboard_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/headerLinksStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/headerLinksStyle.js");




 // @material-ui/core components









 // @material-ui/icons




 // core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_material_dashboard_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_20__["default"]);
function AdminNavbarLinks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      openNotification = _React$useState2[0],
      setOpenNotification = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      openProfile = _React$useState4[0],
      setOpenProfile = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setWidth(window.innerWidth);
  }, []);

  var handleClickNotification = function handleClickNotification(event) {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  var handleCloseNotification = function handleCloseNotification() {
    setOpenNotification(null);
  };

  var handleClickProfile = function handleClickProfile(event) {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  var handleCloseProfile = function handleCloseProfile() {
    setOpenProfile(null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.searchWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    formControlProps: {
      className: classes.margin + " " + classes.search
    },
    inputProps: {
      placeholder: "Search",
      inputProps: {
        "aria-label": "Search"
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: "white",
    "aria-label": "edit",
    justIcon: true,
    round: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_17___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: width > 959 ? "transparent" : "white",
    justIcon: width > 959,
    simple: !(width > 959),
    "aria-label": "Dashboard",
    className: classes.buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.icons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: classes.linkText
  }, "Dashboard"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.manager
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: width > 959 ? "transparent" : "white",
    justIcon: width > 959,
    simple: !(width > 959),
    "aria-owns": openNotification ? "notification-menu-list-grow" : null,
    "aria-haspopup": "true",
    onClick: handleClickNotification,
    className: classes.buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.icons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classes.notifications
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    onClick: handleCloseNotification,
    className: classes.linkText
  }, "Notification"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    open: Boolean(openNotification),
    anchorEl: openNotification,
    transition: true,
    disablePortal: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.popperClose, !openNotification)) + " " + classes.popperNav
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      id: "notification-menu-list-grow",
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10___default.a, {
      onClickAway: handleCloseNotification
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default.a, {
      role: "menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseNotification,
      className: classes.dropdownItem
    }, "Mike John responded to your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseNotification,
      className: classes.dropdownItem
    }, "You have 5 new tasks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseNotification,
      className: classes.dropdownItem
    }, "You", "'", "re now friend with Andrew"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseNotification,
      className: classes.dropdownItem
    }, "Another Notification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseNotification,
      className: classes.dropdownItem
    }, "Another One")))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.manager
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: width > 959 ? "transparent" : "white",
    justIcon: width > 959,
    simple: !(width > 959),
    "aria-owns": openProfile ? "profile-menu-list-grow" : null,
    "aria-haspopup": "true",
    onClick: handleClickProfile,
    className: classes.buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.icons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: classes.linkText
  }, "Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    open: Boolean(openProfile),
    anchorEl: openProfile,
    transition: true,
    disablePortal: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.popperClose, !openProfile)) + " " + classes.popperNav
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      id: "profile-menu-list-grow",
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10___default.a, {
      onClickAway: handleCloseProfile
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default.a, {
      role: "menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseProfile,
      className: classes.dropdownItem
    }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseProfile,
      className: classes.dropdownItem
    }, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, {
      light: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleCloseProfile,
      className: classes.dropdownItem
    }, "Logout")))));
  })));
}

/***/ }),

/***/ "./components/user/Template/Navbars/Navbar.js":
/*!****************************************************!*\
  !*** ./components/user/Template/Navbars/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdminNavbarLinks.js */ "./components/user/Template/Navbars/AdminNavbarLinks.js");
/* harmony import */ var _RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RTLNavbarLinks.js */ "./components/user/Template/Navbars/RTLNavbarLinks.js");
/* harmony import */ var _CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CustomButtons/Button.js */ "./components/user/Template/CustomButtons/Button.js");
/* harmony import */ var _assets_jss_material_dashboard_react_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/headerStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/headerStyle.js");



 // @material-ui/core components





 // @material-ui/icons

 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_material_dashboard_react_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function Header(props) {
  var classes = useStyles();

  function makeBrand() {
    var name;
    props.routes.map(function (prop) {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }

      return null;
    });
    return name;
  }

  var color = props.color;
  var appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, " " + classes[color], color));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.appBar + appBarClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.flex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "transparent",
    href: "#",
    className: classes.title
  }, makeBrand())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
    smDown: true,
    implementation: "css"
  }, props.rtlActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: props.handleDrawerToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, null)))));
}
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleDrawerToggle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
};

/***/ }),

/***/ "./components/user/Template/Navbars/RTLNavbarLinks.js":
/*!************************************************************!*\
  !*** ./components/user/Template/Navbars/RTLNavbarLinks.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RTLNavbarLinks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../CustomInput/CustomInput.js */ "./components/user/Template/CustomInput/CustomInput.js");
/* harmony import */ var _CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../CustomButtons/Button.js */ "./components/user/Template/CustomButtons/Button.js");
/* harmony import */ var _assets_jss_material_dashboard_react_components_rtlHeaderLinksStyle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js */ "./components/user/assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js");




 // @material-ui/core components








 // @material-ui/icons




 // core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_material_dashboard_react_components_rtlHeaderLinksStyle_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
function RTLNavbarLinks() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleToggle = function handleToggle(event) {
    if (open && open.contains(event.target)) {
      setOpen(null);
    } else {
      setOpen(event.currentTarget);
    }
  };

  var handleClose = function handleClose() {
    setOpen(null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.searchWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    formControlProps: {
      className: classes.margin + " " + classes.search
    },
    inputProps: {
      placeholder: "جستجو...",
      inputProps: {
        "aria-label": "Search"
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "white",
    "aria-label": "edit",
    justIcon: true,
    round: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: window.innerWidth > 959 ? "transparent" : "white",
    justIcon: window.innerWidth > 959,
    simple: !(window.innerWidth > 959),
    "aria-label": "Dashboard",
    className: classes.buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.icons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: classes.linkText
  }, "\u0622\u0645\u0627\u0631\u0647\u0627"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.manager
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: window.innerWidth > 959 ? "transparent" : "white",
    justIcon: window.innerWidth > 959,
    simple: !(window.innerWidth > 959),
    "aria-owns": open ? "menu-list-grow" : null,
    "aria-haspopup": "true",
    onClick: handleToggle,
    className: classes.buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.icons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classes.notifications
  }, "\u06F5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    onClick: handleToggle,
    className: classes.linkText
  }, "\u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    open: Boolean(open),
    anchorEl: open,
    transition: true,
    disablePortal: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.popperClose, !open)) + " " + classes.popperNav
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      id: "menu-list-grow",
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10___default.a, {
      onClickAway: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default.a, {
      role: "menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleClose,
      className: classes.dropdownItem
    }, "\u0645\u062D\u0645\u062F\u0631\u0636\u0627 \u0628\u0647 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u067E\u0627\u0633\u062E \u062F\u0627\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleClose,
      className: classes.dropdownItem
    }, "\u0634\u0645\u0627 \u06F5 \u0648\u0638\u06CC\u0641\u0647 \u062C\u062F\u06CC\u062F \u062F\u0627\u0631\u06CC\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleClose,
      className: classes.dropdownItem
    }, "\u0627\u0632 \u062D\u0627\u0644\u0627 \u0634\u0645\u0627 \u0628\u0627 \u0639\u0644\u06CC\u0631\u0636\u0627 \u062F\u0648\u0633\u062A \u0647\u0633\u062A\u06CC\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleClose,
      className: classes.dropdownItem
    }, "\u0627\u0639\u0644\u0627\u0646 \u062F\u06CC\u06AF\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: handleClose,
      className: classes.dropdownItem
    }, "\u0627\u0639\u0644\u0627\u0646 \u062F\u06CC\u06AF\u0631")))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: window.innerWidth > 959 ? "transparent" : "white",
    justIcon: window.innerWidth > 959,
    simple: !(window.innerWidth > 959),
    "aria-label": "Person",
    className: classes.buttonLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.icons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: classes.linkText
  }, "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"))));
}

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__);
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
  var links = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.list
  }, routes.map(function (prop, key) {
    var activePro = " ";
    var listItemClasses;
    listItemClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, " " + classes[color], activeRoute(prop.layout + prop.path)));
    var whiteFontClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, " " + classes.whiteFont, activeRoute(prop.layout + prop.path)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: prop.layout + prop.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: activePro + classes.item,
      activeClassName: "active",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
      button: true,
      className: classes.itemLink + listItemClasses
    }, typeof prop.icon === "string" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.itemIconRTL, props.rtlActive))
    }, prop.icon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(prop.icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.itemIconRTL, props.rtlActive))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
      primary: props.rtlActive ? prop.rtlName : prop.name,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemText, whiteFontClasses, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.itemTextRTL, props.rtlActive)),
      disableTypography: true
    }))));
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mdUp: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "temporary",
    anchor: props.rtlActive ? "left" : "right",
    open: props.open,
    classes: {
      paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.drawerPaperRTL, props.rtlActive))
    },
    onClose: props.handleDrawerToggle,
    ModalProps: {
      keepMounted: true
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sidebarWrapper
  }, props.rtlActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_13__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_12__["default"], null), links), image !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.background
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    anchor: props.rtlActive ? "right" : "left",
    variant: "permanent",
    open: true,
    classes: {
      paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.drawerPaperRTL, props.rtlActive))
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sidebarWrapper
  }, links), image !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react.js":
/*!****************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react.js ***!
  \****************************************************************/
/*! exports provided: hexToRgb, drawerWidth, transition, container, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, blackColor, whiteColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardSubtitle, cardLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackColor", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);



/*!

 =========================================================
 * Material Dashboard React - v1.9.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
var hexToRgb = function hexToRgb(input) {
  input = input + "";
  input = input.replace("#", "");
  var hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    var _first = input[0];
    var _second = input[1];
    var _last = input[2];
    input = _first + _first + _second + _second + _last + _last;
  }

  input = input.toUpperCase();
  var first = input[0] + input[1];
  var second = input[2] + input[3];
  var last = input[4] + input[5];
  return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(first, 16) + ", " + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(second, 16) + ", " + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


var drawerWidth = 260;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
var container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
var primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
var warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
var dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
var successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
var infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
var roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
var grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7"];
var blackColor = "#000";
var whiteColor = "#FFF";
var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
var primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
var infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
var successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
var warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
var dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};

var warningCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

var successCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

var dangerCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

var infoCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

var primaryCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

var roseCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

var cardActions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
var title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

var cardTitle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

var cardSubtitle = {
  marginTop: "-.375rem"
};
var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};


/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/buttonStyle.js":
/*!***************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/buttonStyle.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");

var buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal, &.material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  rose: {
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2)"
    }
  },
  primary: {
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2)"
    }
  },
  info: {
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/customInputStyle.js":
/*!********************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/customInputStyle.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");


var customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["grayColor"][4] + " !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"][0]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"][0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"][0]
    }
  },
  labelRoot: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["grayColor"][3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset"
  }),
  labelRootError: {
    color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"][0]
  },
  labelRootSuccess: {
    color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"][0]
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "16px"
  },
  formControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    verticalAlign: "unset"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/footerStyle.js":
/*!***************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/footerStyle.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");


var footerStyle = {
  block: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontWeight: "500",
    fontSize: "12px"
  }),
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    bottom: "0",
    borderTop: "1px solid " + _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["grayColor"][11],
    padding: "15px 0"
  }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"]),
  container: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  a: {
    color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (footerStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/headerLinksStyle.js":
/*!********************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/headerLinksStyle.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");
/* harmony import */ var _material_dashboard_react_dropdownStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material-dashboard-react/dropdownStyle */ "./components/user/assets/jss/material-dashboard-react/dropdownStyle.js");





var headerLinksStyle = function headerLinksStyle(theme) {
  var _notifications, _manager, _searchWrapper;

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_material_dashboard_react_dropdownStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(theme), {
    search: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "& > div": {
        marginTop: "0"
      }
    }, theme.breakpoints.down("sm"), {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
      }
    }),
    linkText: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      zIndex: "4"
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "14px",
      margin: "0px"
    }),
    buttonLink: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down("sm"), {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }),
    searchButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down("sm"), {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }),
    margin: {
      zIndex: "4",
      margin: "0"
    },
    searchIcon: {
      width: "17px",
      zIndex: "4"
    },
    notifications: (_notifications = {
      zIndex: "4"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_notifications, theme.breakpoints.up("md"), {
      position: "absolute",
      top: "2px",
      border: "1px solid " + _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"],
      right: "4px",
      fontSize: "9px",
      background: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"],
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_notifications, theme.breakpoints.down("sm"), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "14px",
      marginRight: "8px"
    })), _notifications),
    manager: (_manager = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_manager, theme.breakpoints.down("sm"), {
      width: "100%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_manager, "display", "inline-block"), _manager),
    searchWrapper: (_searchWrapper = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_searchWrapper, theme.breakpoints.down("sm"), {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_searchWrapper, "display", "inline-block"), _searchWrapper)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/headerStyle.js":
/*!***************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/headerStyle.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");



var headerStyle = function headerStyle() {
  return {
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["grayColor"][7],
      border: "0",
      borderRadius: "3px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block"
    },
    container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
      minHeight: "50px"
    }),
    flex: {
      flex: 1
    },
    title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
      letterSpacing: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      margin: "0",
      "&:hover,&:focus": {
        background: "transparent"
      }
    }),
    appResponsive: {
      top: "8px"
    },
    primary: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["whiteColor"]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultBoxShadow"]),
    info: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["whiteColor"]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultBoxShadow"]),
    success: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["whiteColor"]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultBoxShadow"]),
    warning: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["whiteColor"]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultBoxShadow"]),
    danger: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["whiteColor"]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultBoxShadow"])
  };
};

/* harmony default export */ __webpack_exports__["default"] = (headerStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js":
/*!***********************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");
/* harmony import */ var _material_dashboard_react_dropdownStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material-dashboard-react/dropdownStyle */ "./components/user/assets/jss/material-dashboard-react/dropdownStyle.js");





var headerLinksStyle = function headerLinksStyle(theme) {
  var _notifications, _manager, _searchWrapper;

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_material_dashboard_react_dropdownStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(theme), {
    search: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "& > div": {
        marginTop: "0"
      }
    }, theme.breakpoints.down("sm"), {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
      }
    }),
    linkText: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      zIndex: "4"
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "14px",
      margin: "0px"
    }),
    buttonLink: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down("sm"), {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }),
    searchButton: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down("sm"), {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }),
    margin: {
      zIndex: "4",
      margin: "0"
    },
    searchIcon: {
      width: "17px",
      zIndex: "4"
    },
    notifications: (_notifications = {
      zIndex: "4"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_notifications, theme.breakpoints.up("md"), {
      position: "absolute",
      top: "2px",
      border: "1px solid " + _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"],
      right: "4px",
      fontSize: "9px",
      background: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0],
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"],
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_notifications, theme.breakpoints.down("sm"), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "14px",
      marginRight: "8px"
    })), _notifications),
    manager: (_manager = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_manager, theme.breakpoints.down("sm"), {
      width: "100%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_manager, "display", "inline-block"), _manager),
    searchWrapper: (_searchWrapper = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_searchWrapper, theme.breakpoints.down("sm"), {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_searchWrapper, "display", "inline-block"), _searchWrapper)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/components/sidebarStyle.js":
/*!****************************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/components/sidebarStyle.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");




var sidebarStyle = function sidebarStyle(theme) {
  var _objectSpread2, _drawerPaperRTL;

  return {
    drawerPaper: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      border: "none",
      position: "fixed",
      top: "64px",
      bottom: "0",
      left: "0",
      zIndex: "1"
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], (_objectSpread2 = {
      width: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["drawerWidth"]
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.up("md"), {
      width: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["drawerWidth"],
      position: "fixed",
      height: "100%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down("sm"), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["drawerWidth"]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], {
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: "translate3d(".concat(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["drawerWidth"], "px, 0, 0)")
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["transition"])), _objectSpread2)),
    drawerPaperRTL: (_drawerPaperRTL = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_drawerPaperRTL, theme.breakpoints.up("md"), {
      left: "auto !important",
      right: "0 !important"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_drawerPaperRTL, theme.breakpoints.down("sm"), {
      left: "0  !important",
      right: "auto !important"
    }), _drawerPaperRTL),
    logo: {
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["grayColor"][6]) + ", 0.3)"
      }
    },
    logoLink: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      textTransform: "uppercase",
      padding: "5px 0",
      display: "block",
      fontSize: "18px",
      textAlign: "left",
      fontWeight: "400",
      lineHeight: "30px",
      textDecoration: "none",
      backgroundColor: "transparent",
      "&,&:hover": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
      }
    }),
    logoLinkRTL: {
      textAlign: "right"
    },
    logoImage: {
      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px"
    },
    img: {
      width: "35px",
      top: "22px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"],
        opacity: ".8"
      }
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
      }
    },
    itemLink: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: "auto",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent"
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"]),
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: "rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]) + ", 0.8)"
    },
    itemIconRTL: {
      marginRight: "3px",
      marginLeft: "15px",
      float: "right"
    },
    itemText: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
    }),
    itemTextRTL: {
      textAlign: "right"
    },
    whiteFont: {
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
    },
    purple: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryColor"][0]
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryBoxShadow"], {
      "&:hover,&:focus": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryColor"][0]
      }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryBoxShadow"])
    }),
    blue: {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"][0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"][0],
        boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"][0]) + ",.2)"
      }
    },
    green: {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"][0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"][0],
        boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"][0]) + ",.2)"
      }
    },
    orange: {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"][0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"][0],
        boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"][0]) + ",.2)"
      }
    },
    red: {
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0],
        boxShadow: "0 12px 20px -10px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"][0]) + ",.2)"
      }
    },
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch"
    },
    activePro: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up("md"), {
      position: "absolute",
      width: "100%",
      bottom: "13px"
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (sidebarStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/dropdownStyle.js":
/*!******************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/dropdownStyle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");




var dropdownStyle = function dropdownStyle(theme) {
  return {
    buttonLink: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.down("md"), {
      display: "flex",
      marginLeft: "30px",
      width: "auto"
    }),
    links: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      width: "20px",
      height: "20px",
      zIndex: "4"
    }, theme.breakpoints.down("md"), {
      display: "block",
      width: "30px",
      height: "30px",
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["grayColor"][9],
      marginRight: "15px"
    }),
    linkText: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      zIndex: "4"
    }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "14px"
    }),
    popperClose: {
      pointerEvents: "none"
    },
    popperResponsive: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.down("md"), {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      WebkitBoxShadow: "none",
      boxShadow: "none",
      color: "black"
    }),
    popperNav: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.down("sm"), {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "unset !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "0rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
          color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"] + " !important",
          margin: "10px 15px 0!important",
          padding: "10px 15px !important",
          "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none"
          }
        }
      }
    }),
    dropdown: {
      borderRadius: "3px",
      border: "0",
      boxShadow: "0 2px 5px 0 rgba(" + Object(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"])(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["blackColor"]) + ", 0.26)",
      top: "100%",
      zIndex: "1000",
      minWidth: "160px",
      padding: "5px 0",
      margin: "2px 0 0",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"],
      WebkitBackgroundClip: "padding-box",
      backgroundClip: "padding-box"
    },
    dropdownItem: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      WebkitTransition: "all 150ms linear",
      MozTransition: "all 150ms linear",
      OTransition: "all 150ms linear",
      MsTransition: "all 150ms linear",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      lineHeight: "1.42857143",
      color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["grayColor"][8],
      whiteSpace: "nowrap",
      height: "unset",
      minHeight: "unset",
      "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryColor"][0],
        color: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["whiteColor"]
      }, _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryBoxShadow"])
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (dropdownStyle);

/***/ }),

/***/ "./components/user/assets/jss/material-dashboard-react/layouts/adminStyle.js":
/*!***********************************************************************************!*\
  !*** ./components/user/assets/jss/material-dashboard-react/layouts/adminStyle.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material-dashboard-react.js */ "./components/user/assets/jss/material-dashboard-react.js");




var appStyle = function appStyle(theme) {
  var _objectSpread2;

  return {
    wrapper: {
      position: "relative",
      top: "0",
      height: "100vh"
    },
    mainPanel: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])((_objectSpread2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.up("md"), {
      width: "calc(100% - ".concat(_material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["drawerWidth"], "px)")
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "overflow", "auto"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "position", "relative"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "float", "right"), _objectSpread2), _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["transition"], {
      maxHeight: "100%",
      width: "100%",
      overflowScrolling: "touch"
    }),
    content: {
      marginTop: "70px",
      padding: "30px 15px",
      minHeight: "calc(100vh - 123px)"
    },
    container: _material_dashboard_react_js__WEBPACK_IMPORTED_MODULE_2__["container"],
    map: {
      marginTop: "70px"
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (appStyle);

/***/ }),

/***/ "./components/user/routes.js":
/*!***********************************!*\
  !*** ./components/user/routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/LibraryBooks */ "@material-ui/icons/LibraryBooks");
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "@material-ui/icons/CalendarToday");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Book */ "@material-ui/icons/Book");
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_4__);
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




 // core components/views for Admin layout
// import DashboardPage from "./views/Dashboard/Dashboard.js";

var dashboardRoutes = [[{
  path: "/user",
  name: "User Profile",
  icon: _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0___default.a,
  layout: "/User"
}, {
  path: "/studios",
  name: "Studio Lists",
  icon: _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_1___default.a,
  layout: "/User"
}, {
  path: "/calendar",
  name: "Calendar",
  icon: _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_2___default.a,
  layout: "/User"
}, {
  path: "/history",
  name: "Booking History",
  icon: _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_4___default.a,
  layout: "/User"
}], [{
  path: "/user",
  name: "User Profile",
  icon: _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_0___default.a,
  layout: "/User"
}, {
  path: "/studios",
  name: "Studio Lists",
  icon: _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_1___default.a,
  layout: "/User"
}, {
  path: "/maps",
  name: "Maps",
  icon: _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default.a,
  layout: "/User"
}, {
  path: "/history",
  name: "Booking History",
  icon: _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_4___default.a,
  layout: "/User"
}] // {
//   path: "/dashboard",
//   name: "Dashboard",
//   icon: Dashboard,
//   component: DashboardPage,
//   layout: "/admin",
// },
];
/* harmony default export */ __webpack_exports__["default"] = (dashboardRoutes);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ps": "_2u6FRWHw297P_r1UVCfZ4l",
	"ps__rail-x": "_3YnY8kbOXZzHUdA1RN4MpN",
	"ps__rail-y": "_31m-qjFPTvE3PjC0gf9e5L",
	"ps--active-x": "_2eV6MzsivcD46W8zJbJSsN",
	"ps--active-y": "_2gNZ0AV-piZxrKj5BA7anq",
	"ps--focus": "_1uEfvsA_2cVxefeFjViVY8",
	"ps--scrolling-x": "_2Sse_7B1R8_fySztilsIcP",
	"ps--scrolling-y": "_1E-91IwGU9HQr2MJ5tVWTl",
	"ps--clicking": "hP6GLYdc-W0z9jejdV0g5",
	"ps__thumb-x": "_1YRJPgFVeyuK7Wnvt-FZEq",
	"ps__thumb-y": "_2NFyvqrULM5K6VPwK3jy22"
};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "perfect-scrollbar");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
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

/***/ }),

/***/ "./public/img/reactlogo.png":
/*!**********************************!*\
  !*** ./public/img/reactlogo.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADiCAMAAAAI7e7JAAAC/VBMVEUAAABh2vsA//+A//9h2vth2vuAv/9V1f9h2vtV//9t2/9g2/xh2vti2vhh2vth2vth2vtg2/th2vth2vtf3Pph2vtm5v9V4/9g2fxg2fxd0f9h2vtk3v9e2f9m2f9i2P9g3/9d3P9i2fth2vth2vth2/xi2vth2vti2/tb2/9h2/th2vti2vtg2/xi2vtm3f9q1f9h2vtf2/hg2vth2/xg2vph2vth2fth2vti2/xg1/dh2fph2/th2vxh2vti2/th2vth2/pj2/pg3/9h2/tg2vtg2fti2fxi2fth2vti2vpi2/tg2/xh2vxh2vth2vtj1f9f2/lh2vth2ftj1v9h2vti2vte1/hh2vtj3Plh2/xh2vti2vph2vxi2/th2vph2/xh2vth2vtg2flg2fxe2Pla4f9i3Pth2vth2vth2vph2vtmzP9h2vtg2vxf2fth2vxg1/lh2/xh2vtg2vth2vph2vtg2vtg2fpg2vxh2vph2vth2vth2vtj2vxh2vxh2vth2vth2vth2/ph2/tk2vli2fxg2vtg2/ph2vth2fti2Pph2vpi2fph2vxg2fpm1v9h2/th2vpk2/9h2vth2fph2vth2vtk2Pdh2vth2vtg2vth3P9h2fpi2vtj3Phg3/9h2vtj2vti2/xg2vxh2/pg2vph2vph2/ph2fti2P9i2fph2/th2vpi2/ti2/ph2vpg2fth2vte1/9i2Phi2fti2/th2vtg2fti2/th2/ph2vth2fxh2vxh2vti2vph2fxj2fpg2/pg2fxg2vxh2fpg2fth2fth2vxh2fti2/th2vth2vtg2vxg2vtg2/ph2/li2vth2fth2/9i2fxh2vti2vpg2/ti2vti2fxh2/tg2vth3Pti2/ph2vpg2vtg2vtg2vth2/th2vxg2/xi2fpg2vpi2vxi2/xg3Pte3f9h2Pth2/tg3fhi2fti2/xh2vth2vtf2Ptg2vpi2vxh2fph2vth2vxh2vth2vth2vtg2/ti2vth2vth2vtJDecAAAAA/nRSTlMA/gEC/fwEBvUDB1XzIvT4+3ft+TP2CglKUAuLFxsUDQgWPPexT4jqxA7S8cxNRA8M+iPRk2/jxcaaIODL3ZHZ8GkxELasPV6AzmavXZ7WkBIr1ecf8u4muyxU6afcjaZc1+8oWC4RQcq4YeQFs95DmS2b67TiuuY1n6WthM1LlsPA6HG9KVHJauy+NGeinWUZR+Ecial25SGussEdZHUkGNM+W1qhMKAyjhovjDc5cG6H2BMnt0aDeniov1dZ1GhfNjicl2xyeZiBhXvCUoJiKqqwFZXaYH99SX6POmPfRYq5P0yUa6RTTkgeQoYlc1Z8dDttkqO128/HyEC80JKcV48AABHqSURBVHhe7MAxEYAgFADQP/3F1WMyAwHIYAESOBPCDpSikyUcvPO9+BIAAAAAAAAAAIDS+j6OeEHOaztXvTN+4yHvPqOlKNY1AL89aQd23uwIOwY2sMk555xzRpIkyTmJRImCgIqiIBwRUDCAgDHncDwKxmM45nwMR08O91333tPVM10z09M9Hq9rdt3n/169plbXrurv+6q+wst6dtRIkmWz3v3iCH66/N+/NSaJutQ26clQH3BD20xKhv16BH4K3xUPllHiXT0aqnN/V8YQ2k2H8hGlaYPHM1TZs24orWgMw1vyh+6IwvTrPAzv1WIobMhWWqo6UwKHVpZrtLQjG8rybWYkKb8uhgMFkzRGMsEFVd1OGx3zYCfxgSTa+A6Kes9DW8uvRES5b9BWVjMoydecflM+/Czvq977B85nsNT0BFiqt4rBMvqf/mTliOlXPDCFfj2gpKM0TJ3sgvD1Kzs0yuo2g4WP36ds/B23uWEYN4qGu6Ag168obJ8Os+SXr6ckqZ8LYSTW8lAye8tcmHXrQqEcCvqAgrYXQRI/a0XJ0iEIMbo5JT3uRLAvKGjtoJ5jFFYhVGLXOTSb3w1BvuxCs81PIoxyCvdDOdkjqfMkI5wmdTJpkvU4zNwvazSZ8z3CupPCMCgnl8I8WPj2PM0WxsGv3qs0SetUDxZmUVBvDt9BIReWHsmgSZsSCNMm0uS/FsHSZRR+B9X0pS4lDtYKltNkoghO/WgeV0+tRFirrVH3ORSTmEbdR4jE1S+FARm9ACAviwHLZiIiY690DxRznMIDiOzCIAZkbQGe8TKgvDsiG0ydNxtq6U3hFtgo6skA7+k6DPC844KNRyg8AbXcR+EI7LhaNmVYVXmwtZPCpVDLKuqSXLC3YAnDePRb2OtO4WaoZTN1f4MTyfcwxI7GcMIY+z9BLY9G95lf2IZBVsdFt126DmpZRt0uOJP4ICWd3HBmg6IxwVHUrYND7hY0OQ2nbqSuLtSSRt21cMh1giaXwKnPqWsOtWjU/QEOXULJ/XDoeep+9f98AH/NIC3hTFvFB/AFOHIVg3kehiOrFB1AL3V14ESelyEyZ8KJ1Yr+D+xC3btwYGU8DV76jboSDlykrjXU0oq612FvxHAaPLeeod/8kii2MR9BLVOoexC2iprTbxNcbenXIR+22lDXE6qQf9cG2PF9RL9vACQcoF9PN+xMpG431NLfcaS4E/12uQAgbjn9+sBOCnUvQi1PU9cFNibT70afyMmtpUGrgciyKZyGWvpQyEFEO8toWJ8DofZEGkYORUTtKDwMtVxN4RwiKVlGQ/sS+F2oouGNGYhkJoVSqGUBhS8RwdybaIjvBpNcLw093I4+YQqglnaOQu3X0qBdCsnN9PutkxhEmQtqScik7ilYe9tDw+UIspgGzwewNk/Z4pjO9oHOgkoa5rkRJLE1DcOP2D9mHlSzhrrtsJJwEw2D6jV+LXlozf+xc2fN6cnJJTO6o/Y+GnYkwEJiUylooZIXKNyA8JpcS8fqNLFLC0+GampQqAGZb3TF3YP7981gVLavPfBuy4bf+qwW4eNQzZUMyYr4Fg04c2BKU/4HMgetOTN5kQ+GhdSlJUI1CSOp2wwAc+/c1rZDGX8mqQ0Wf/ZkHAB0UDGcKjxE3dQhV7y4IZ4/u7K6H+ZdkyptltRyLQWN//eugnp+w19QN6jG3Wsgf0Gv35IAhbhnrhtOZ9IqO//j/KTXX0zf1K/fmzVqVDRq9GWNGr379Tudfl+LP897qf6ykXRm4/ML3FDDtD7z6dQZ2KpFp67vdBuqvfxDsxhJfINj+4/RMKUYtnLuoeGp9F1rsxhJ36uKUJ1daNGFltpf91xFMzdwtpKC9y44cJeXworugPtw3v0Xl9HSyHWLUF2VztMYXlLdTjWOQBhIQy0ITifx0xD2NOwzbyot1G3oQvXjqthKKwPcCPhYo9A5B4LTSewpRYAvnVb61nCjmsltQCvymxY3RR6N6CbxsDgETKC15nkuVCN3tmao+J5e6iYi4AEaBkd/8I5Mh19iFXUZF+MZqkMvVBcFuzQGy1rzcD42UDgFQ0EShWX5cCz7fQpJ14SeBz2G/IfXZDHEdSNQHSTcncIg2kOTiwBgU2iBwSQavkAUGgZGJTRr8hsAaHJ0h8YgWek+xLyhf2eQjZ3GBqfm6kP4UaOwHFEpp2EvdO7h1KUWQXcwfR+DNN+J2OZqmUpZm3Fz4VefwmHxo/tSSB2NqIyIpzBMvFW9KCyFny/vJcqa7nchhg0pp8RTXhr+xNx+qRAm2logefHpin97l8LV8op9wEPJ7BLErLHzaeY9MQ2ybvIcTnyfQvtshHCf+uPT51+6qcfr28a6ECJuEIXKxgCQsIK6tBLIzg300qxVN8Soe7vQbMwp6xNfvA0AnqUhD8EKvmlFv/dfro1gt2gUPgSAr2hdmjrtIs1S8hCTjnpp0mEmwniHQicAjbdTmI0g3f+USUlWrSYIMoFCarKpuJyXIYyPt9LEcxli0KVpDIi3uAGrmUbd9kTgDAXvWMgWrGCIfT9C1i6Vwp+BevHUpXa3uEugigHaNsScLzwM+MvXtveSbEFBPC3KcVt6GEbaIavvEc8iXEahPywcXMoA7RHEmCfi6ZfyOCzdTaEcT1GIL4DkfoantYRkRgaFcjzkoLByQAr9yn5ETCkZTr83FsFa7abUNf2n12IL8wqteGpA8iwNl3qoG1UMa2M706/yJGLJq/S7sTEiOUChikJlPZhNL6OlkaNhljifQiaFTxFJvf70O+9C7BhAvxMJiOgKBvsjzNxbGcFLLnnhYjCbLIj7KfpdjZiR04qGtm5EljCHsr/Gwex3jEiexK5ZlPWFDdc6GjY2Qay4WTrZYeNyyo7K4zuRETWXH7CXsmdgx7VbqhWOCe72FOpnw1ayh2ZvJASNiI27IJFjP1lDYKt4LYUVvli7mzLpHBz4C83ehGQVbXSC5G2aDYQDzbpQaIjY8CmFB+DEVzTp6INkH208Cpm05tSEE5soLI6xm+2m5sMJV2cGHILkCO1oRdarems4UryEukGICQneKIvy/ki/9nGQfExbNSFxdaDfrVFOGS0HsaBQjoPYK6qi4THIxtHWV5bpkeFxcOYRCgcRCw5TuAIOnaDQJRGyAbT1BWSu8c6XEOH3FKYjFtSO9miBuyMNvSD7nrZyIbuXhvGJcOb72Lqq1qdR1yLqnCTHQLaAtu6ErC79esOZdynkIyYMo64yEY4sJ61ewYO0NQOSRgxYC0d8c6ibiNjQVsqP2TqnMeAjSFwbaaMjZDfR5K7ozi7vQmzIo7DkJBxoQbMnIZlAG20h+SfNJsGBPeNj7ZrQueMprPfBVpMqmvWIspZ/ASQ7aJZZG7Z8GyhkFCNGvBjNNXWvUPYEzOKut5nBCTC7hbKboynPrIVY0T2DhhdgpzVlsyF5lhEdgmQDZfe4YOMdGrqcRcy4m351ENk0BvsAkAsuI6jvg9knDFbqPBqZjtiRsJ5+bRMRyYcUNAp/c8uz0ktLmTvlxz5KoYzCKkQSt45+//AhhiRX0W/rQVibu5HCDzQ8DslztPSMRf5O2+KhLqUerF3Thn4poxFTcr30q7wXlr6k0AHrKSzLgeRpu9pqIXsOheuw3EEfjEbj6eepQIz5jAHa4u6wMCGQi+tFw3OQuO5gWC/A4lVtehi3UtgMC40Xagz4ATFnP02Gj0NY+SnUNX0N6EFhZG3IBiQxRJdxkBV2odACyJlKnacAYV2xjCZ1EIPSaXbjlREjca8COO6xTIePOECZNuGkVecLJtU2V0jfjTCm9afZW4hJVzelSdrCPQhRLhWC76aQdgrBaq6Op1/SiekINjZNKlkvpbAVIfY8n0YT7zOIUb8fRbOUywshm5FJXUYiAOxJotDahRBNGtbqMWzZvmFL6+RmI4TrJgrjiwDA9QZ1WjPICu9LodnIXMSsZh0oiW9xQ/i2LM/j3/7An9xEakDw3uat8BvkG1rEU1L/SsSwuEs0StIm1URATwpio5Ozj8KSs4hK4+EUJsaJKU2hDQJqTkqj7OkcxLZGHRmkwWONoStOom5qXEgSqS2i0im0vNqYw549xiB3XcsgrT5BzMu+3csg8atKXdJhrM9h6EHB8ySicNwbGouoQ6EfALhvORbPINrCxqgOum1giFadSl143rQGCyNS5DiBPXkFyTwX2heyBzC0T0eGaFCK6mLcfIZq/+EK6rKahOs68Cwc60eGttdwtaIutVZ7hprT24XqI65rK1orDxu+yhoNh76uotCqSMoVWKvclIPqpbil9RB2hclMjUJrNxxxzaZhC0wqaGX8/U1Q/cytMYsWVlxsWZoIYVe0k/h3NPwFgm9o74XDNIbXsWU2qifXveVeWol/qdbRbokASkZFN4kLplJIOgiguNvkO9Zn0Yq2fIsb1dhB0UDdgrfzmvseHsyoJvFSGp7//uU1nb2MIOOS0aju3KULk+jUd7DVm055x/TOhhKKHl+aSkfKHuq/anCfu9/c0qi0Zs2hycknZ8zYk/y/19H2arTlle8u/3R1j78n0RHvjm2FUEjjo/35C2pzVQlU04y/oMegnkf4C9oN9VxCnTbz9IR9/Plpg3a/Mm27ik3RhPXU/RUACsbVmb2RP5v2r771yVkAmE2dtwiqcaeEtKU6mfvc6gYj+R/JaL37hwVDQis3eqm7huyH7JoF225f02AJo+O5vu7qb67uVQhZBYVtUE0FhQUIK3/oYjq263AcwiqgsA7qkON+2gxYiNtKQ/vpyadqrmzUqGEN3duNdp6aNoyGR7NhZQV166GaSdStgKV2o2jo77auxGbKBfte7qOgmg7UPQRrn2jWHW2eod/jsLaOwlkoJsNJ9u0SGrRbIemVScMqR6WeK6GW7o6qmOfWpSFLGoEbltBQPx8RvE3hUqjlNgoViOTIHBquPwm/Js1pyGiGSJIp3A+1NKSwCBE9URaml2tCfxq8exGRz0Pd66p2Nix0foPK5kTo/hTFOYZK6g5ALb+lLs0dRXfXCW65nxW5xgUb9alrA7W0oG447PjGUBDnP7vSr0E+7Bh/PR9q+Zy6v8FWveb0eweo8NIw5xrnDxoFtbxK3fLoeqyz68xUGqoWwd5g6tKgln9Rd2OUXf49STSk7YUDdSgUQyn/iKp3fJ7nJzeaeplCIZTSgLpJcOQxhngruuWetdUcwBNRRr8YbYBvv+IDOBAO3U7Jg2448wOFI1DKLLl3gD3XCZrMjou6G36Jmo0hz8OphhoDrnVFmz1lNpRSTl1dOPRmU5odi4MzixXdB/6ZuvpwxPUCg4ypB0cmUJcBVchrwnY44VvIEL/6Gk60pm4Q1LKJwhDYOzuGYcy5Ew5spG4M1DKOwhOwdaojw0ptCVtNKAxUNaQ/GXaOxjNg6SYvAwYWw8ZxCu9ALTleh83P5g6myWIfKszj2aCd02/APChmkLPu58l1GaD1AYAnxjOgqh8iukihHRSzmjqtBNZcj8UzoKnom3L4rzTpWQhrrkrqtrugmEMUBsBS7aU0qdoL4bXWNFmRC0tPUugJ1YywvavY3XsJTTpfgJ+vDs3mWc7PY+qWt2GKTcOFlR1o1rMIZo9n0STluTiEU1hGnXYDlPNbCg8ijGsWemjiTXdB1m0+zTpf6kaoMxTqQj3NNAp7Q4fv9VSaVTZCiCFLKRl0awKCHM+k0BUKOk+h8jAk3Z5OpeTG2gjDdVUSJfdseg1mJydSGFUEBd1Cw/Wl8Dv72VrKRh6ChWZ1KcvsWVEPhic70nAflLSDBs/yW88V47WxFbf39TDI+mRYSkhPZRDvrFpv5h6fnrvtvEZDRiGUdGUmzTIZxtTTCYhk6GbauxqK6kMbnt0lsDOuPW38ywVFuecxorXvwYGc9CRG0v41KKt7X1qrL7Z29gpuT6GljWOhsMYv0cKsChecK7x8KsN7/1sorfgOD0OlrvkAUarXsgHDmDQDqntvA4O06ToEP8WFb/ZR1uZtqA94r0UrCtqgtr1H4Kc7d9nAztQ1rV9n5X+3Z8cEAIIAAMD4vL1IwUkAG2gNQ/j5E4IMpPHypYQlvGCrsTCN0s68bvXZ/9iCu1/pPZYwDAAAAAAAAAAAAD5/T1F3U1GiFwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./public/img/sidebar-2.jpg":
/*!**********************************!*\
  !*** ./public/img/sidebar-2.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "sidebar-2.jpg");

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./pages/User/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\Amen_Ra\quiksession-test-next\client\pages\User\index.js */"./pages/User/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Book":
/*!******************************************!*\
  !*** external "@material-ui/icons/Book" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Book");

/***/ }),

/***/ "@material-ui/icons/CalendarToday":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CalendarToday" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarToday");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/LibraryBooks":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LibraryBooks" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "perfect-scrollbar":
/*!************************************!*\
  !*** external "perfect-scrollbar" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("perfect-scrollbar");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=User.js.map