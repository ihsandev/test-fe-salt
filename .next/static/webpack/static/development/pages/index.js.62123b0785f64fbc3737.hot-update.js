webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/page/navbar/index.jsx":
/*!******************************************!*\
  !*** ./containers/page/navbar/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components */ "./components/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media screen and (max-width: 600px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n  @media screen and (max-width: 600px) {\n    display: block;\n    cursor: pointer;\n    > div {\n      width: 25px;\n      height: 3px;\n      background-color: #fff;\n      margin-bottom: 5px;\n      &:last-of-type {\n        margin-bottom: 0;\n      }\n    }    \n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media screen and (max-width: 600px) {\n    font-size: 0.5em;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  > div {\n    padding: 5px 20px;\n    cursor: pointer;\n    transition: all 0.2s;\n    display: flex;\n    align-items: center;\n    color: #717171;\n    i {\n      font-size: 1.2em;\n      margin-right: 0.5rem;\n    }\n    &:hover {\n      background-color: #eee;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 20px 50px 10px 50px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  /* padding : 20px 30px; */\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0px 3px 10px rgba(186, 52, 159, 0.5);\n  right: 0;\n  top: 50px;\n  z-index: 10;\n  transition: all 0.3s ease;\n  transform: translateY(", "); \n  opacity: ", "\n  h6 {\n    text-align: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2.2em;\n  color: #ffff;\n  span {\n    font-weight: lighter;\n  }\n  @media screen and (max-width: 600px) {\n    font-size: 1.5em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // STYLES

var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());
var RowCustome = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"])(_templateObject2());
var ContainerCustome = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"])(_templateObject3());
var DetailAuthor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), function (_ref) {
  var show = _ref.show;
  return show ? '0' : '-15px';
}, function (_ref2) {
  var show = _ref2.show;
  return show ? 1 : 0;
});
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var Action = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var NewButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Components__WEBPACK_IMPORTED_MODULE_4__["Button"])(_templateObject7());
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var WrapMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());

var Navbar = function Navbar(_ref3) {
  var setShowMenu = _ref3.setShowMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  return __jsx(ContainerCustome, null, __jsx(RowCustome, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "3",
    xs: "12"
  }, __jsx(WrapMenu, null, __jsx(Title, null, "Social ", __jsx("span", null, "Network")), __jsx(Burger, {
    onClick: function onClick() {
      return setShowMenu(true);
    }
  }, __jsx("div", null), __jsx("div", null), __jsx("div", null)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "5",
    xs: "5"
  }, __jsx(Components__WEBPACK_IMPORTED_MODULE_4__["Search"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "auto",
    xs: "3"
  }, __jsx(NewButton, {
    block: true,
    icon: "cloud_upload"
  }, "Upload")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      offset: 1
    }
  }, __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx(Components__WEBPACK_IMPORTED_MODULE_4__["Author"], {
    onHover: function onHover() {
      return setShow(true);
    },
    onLeave: function onLeave() {
      return setShow(false);
    },
    name: "Ihsan",
    url: "/static/avatar-placeholder.gif"
  }), __jsx(DetailAuthor, {
    show: show
  }, __jsx(Avatar, {
    style: {
      backgroundImage: "url('/static/avatar-placeholder.gif')"
    }
  }), __jsx("h6", null, "Ihsan"), __jsx(Action, null, __jsx("div", null, __jsx(Components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "settings"
  }), " Pengaturan"), __jsx("div", null, __jsx(Components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "reply"
  }), " Logout")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.62123b0785f64fbc3737.hot-update.js.map