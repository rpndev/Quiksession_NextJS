webpackHotUpdate("static\\development\\pages\\User\\studios.js",{

/***/ "./pages/User/studios.js":
/*!*******************************!*\
  !*** ./pages/User/studios.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Studios; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/DeleteOutlined */ "./node_modules/@material-ui/icons/DeleteOutlined.js");
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_studio_StudioAddDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/studio/StudioAddDialog */ "./components/studio/StudioAddDialog.js");
/* harmony import */ var _components_studio_StudioContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/studio/StudioContext */ "./components/studio/StudioContext.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services */ "./services/index.js");













var StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    table: {
      minWidth: 650
    },
    container: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    closeButton: {
      cursor: "pointer",
      position: "absolute",
      right: theme.spacing(1 / 2),
      top: theme.spacing(1 / 2),
      color: theme.palette.grey[500]
    }
  };
});
function Studios() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      studios = _useState2[0],
      setStudios = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      fetchError = _useState4[0],
      setFetchError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      role = _useState6[0],
      setRole = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      initialState = _useState10[0],
      setInitialState = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, auth, _role, temp;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_services__WEBPACK_IMPORTED_MODULE_12__["fetchStudios"])();

              case 3:
                data = _context.sent;
                auth = JSON.parse(localStorage.getItem("auth"));
                _role = null;
                console.log("This is auth", auth);

                if (!(auth && auth.user)) {
                  _context.next = 14;
                  break;
                }

                _role = auth.user.role;
                setRole(_role);

                if (!(auth.user.role === "owner")) {
                  _context.next = 14;
                  break;
                }

                temp = data.map(function (item) {
                  if (item.owner.id === auth.user.id) return item;
                });
                setStudios(temp);
                return _context.abrupt("return");

              case 14:
                setStudios(data);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                setFetchError(_context.t0.message);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [open]);

  function handleConfirm() {
    setOpen(false);
  }

  function handleOnOpen(isFlag) {
    if (isFlag) {
      setInitialState({
        studioInfo: {},
        roomInfo: [],
        equipInfo: [],
        serviceInfo: [],
        engineerInfo: [],
        studioId: -1,
        isSubmit: false
      });
    } // setOpen(true);

  }

  var onEditStudio = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(studioId) {
      var data, studioInfo, roomInfo, engineerInfo, serviceInfo, equipInfo;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_services__WEBPACK_IMPORTED_MODULE_12__["getStudio"])(studioId);

            case 3:
              data = _context2.sent;
              studioInfo = {
                name: data.name,
                address: data.address,
                phoneNumber: data.phoneNumber,
                file: data.file,
                roomType: data.roomType
              };
              roomInfo = data.room;
              engineerInfo = data.engineer;
              serviceInfo = data.service;
              equipInfo = data.equip;
              setInitialState({
                studioInfo: studioInfo,
                roomInfo: roomInfo,
                serviceInfo: serviceInfo,
                equipInfo: equipInfo,
                engineerInfo: engineerInfo,
                studioId: studioId
              });
              handleOnOpen(false);
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setFetchError(_context2.t0.message);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function onEditStudio(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDelete = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(studioId) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!window.confirm("Are you sure you want to delete this studio?")) {
                _context3.next = 9;
                break;
              }

              _context3.prev = 1;
              _context3.next = 4;
              return Object(_services__WEBPACK_IMPORTED_MODULE_12__["deleteStudio"])(studioId);

            case 4:
              fetchData();
              _context3.next = 9;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](1);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 7]]);
    }));

    return function onDelete(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    component: "main",
    maxWidth: "xl",
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, role === "owner" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    m: 1,
    p: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    color: "secondary",
    variant: "contained" // component={Link}
    ,
    onClick: function onClick() {
      handleOnOpen(true);
    }
  }, "ADD NEW BUSINESS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Dialog"], {
    open: open,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_studio_StudioContext__WEBPACK_IMPORTED_MODULE_11__["StudioFormProvider"], {
    initialState: initialState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_studio_StudioAddDialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onConfirm: handleConfirm
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    "aria-label": "Close",
    className: classes.closeButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      setOpen(false);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Table"], {
    className: classes.table,
    "aria-label": "simple table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableHead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, "PhoneNumber"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, {
    size: "small",
    align: "center"
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableBody"], null, studios.map(function (studio) {
    return studio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], {
      key: studio.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, studio.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, studio.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, studio.phoneNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, "$", studio.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, null, studio.owner.name), role === "owner" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, {
      size: "small",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      "aria-label": "edit" // component={Link}
      ,
      onClick: function onClick() {
        onEditStudio(studio.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "inherit"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      "aria-label": "delete",
      onClick: function onClick() {
        onDelete(studio.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
      fontSize: "inherit"
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTableCell, {
      size: "small",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: "/Booking",
        query: {
          studioId: studio.id
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "contained",
      color: "secondary"
    }, "Book"))));
  }))), fetchError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "error"
  }, fetchError))));
}

/***/ })

})
//# sourceMappingURL=studios.js.76e7ef764c1416882455.hot-update.js.map