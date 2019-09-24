webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/organism/mainVideosView/index.jsx":
/*!******************************************************!*\
  !*** ./containers/organism/mainVideosView/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components */ "./components/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #b560a4;\n  display: flex;\n  justify-content:center;\n  justify-items: center;\n  align-items: center;\n  color: #fff;\n  padding: 0 15px;\n  font-weight: bolder;\n  font-size: 1em;\n  cursor: pointer;\n  i {\n    margin-right: 1rem;\n    font-size: 2em;\n    cursor: pointer;\n  }\n  label {\n    cursor: pointer;\n  }\n  @media screen and (max-width: 600px) {\n    label {\n      font-size: 0.7em;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  > div {\n    color: #ba349f;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 20vh 20vh 20vh;\n  overflow: hidden;\n  grid-gap: 1.1rem;\n  .item {\n    background-size: cover;\n    background-repeat: no-repeat;\n    h3 {\n      font-size: 0.8em;\n      padding: 0;\n    }\n    p {\n      padding: 0;\n      font-size: 0.6em;\n    }\n  }\n  .item1 {\n    grid-column: 1 / span 2;\n    grid-row: 1 / span 2;\n    h3 {\n      font-size: 1.5em;\n    }\n    p {\n      padding: 0;\n      font-size: 0.8em;\n    }\n  }\n  @media screen and (max-width: 600px) {\n    .item1 {\n        grid-column: 1 / span 3;\n      }\n      grid-template-rows: 20vh 20vh 20vh 20vh;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Grid = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var More = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());

var MainVideosView = function MainVideosView(_ref) {
  var batman = _ref.batman,
      title = _ref.title,
      subtitle = _ref.subtitle,
      moreIcon = _ref.moreIcon,
      moreLabel = _ref.moreLabel;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setData(batman);
  }, [batman]);
  console.log(data); // constructor() {
  //   super()
  //   this.state = {
  //     data: []
  //   }
  // }
  // componentDidMount() {
  //   const urlFetch = fetch('https://api.tvmaze.com/search/shows?q=batman')
  //   urlFetch.then(res => {
  //     if (res.status === 200) {
  //       return res.json()
  //     }
  //   }).then(resJson => {
  //     const datum = resJson.map(item => item.show)
  //     this.setState({
  //       data: datum
  //     })
  //   })
  // }
  // render() {

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "8"
  }, __jsx(Flex, null, __jsx("h3", null, title), __jsx("div", null, subtitle)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12"
  }, __jsx(Grid, null, data.splice(0, 5).map(function (item, i) {
    return __jsx(Components__WEBPACK_IMPORTED_MODULE_4__["VideosNews"], {
      title: item.show.name,
      name: item.show.genres,
      views: item.show.language,
      key: i,
      classname: i === 0 ? 'item item1' : 'item',
      image: item.show.image.original
    });
  }), __jsx(More, null, __jsx(Components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: moreIcon
  }), __jsx("label", null, moreLabel))))));
}; // }


/* harmony default export */ __webpack_exports__["default"] = (MainVideosView);

/***/ })

})
//# sourceMappingURL=index.js.d7bacc16bb3e5b4ee219.hot-update.js.map