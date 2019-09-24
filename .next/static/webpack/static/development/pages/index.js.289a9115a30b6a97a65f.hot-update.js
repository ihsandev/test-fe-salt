webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/organism/mainChannelView/index.jsx":
/*!*******************************************************!*\
  !*** ./containers/organism/mainChannelView/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var Components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components */ "./components/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  background-color: #b560a4;\n  display: flex;\n  justify-content:center;\n  justify-items: center;\n  align-items: center;\n  color: #fff;\n  padding: 0 15px;\n  font-weight: bolder;\n  font-size: 1em;\n  cursor: pointer;\n  i {\n    margin-right: 1rem;\n    font-size: 2em;\n    cursor: pointer;\n  }\n  label {\n    cursor: pointer;\n  }\n  @media screen and (max-width: 600px) {\n    label {\n      font-size: 0.7em;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  > div {\n    color: #ba349f;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 20vh 20vh 20vh;\n  overflow: hidden;\n  grid-gap: 1.1rem;\n  .item {\n    background-size: cover;\n    background-repeat: no-repeat;\n    h3 {\n      font-size: 0.8em;\n      padding: 0;\n    }\n    p {\n      padding: 0;\n      font-size: 0.6em;\n    }\n  }\n  .item1 {\n    grid-column: 1 / span 2;\n    grid-row: 1 / span 2;\n    h3 {\n      font-size: 1.5em;\n    }\n    p {\n      padding: 0;\n      font-size: 0.8em;\n    }\n  }\n  @media screen and (max-width: 600px) {\n    .item1 {\n        grid-column: 1 / span 3;\n      }\n      grid-template-rows: 20vh 20vh 20vh 20vh;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Grid = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
var More = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3());

var MainChannelView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainChannelView, _Component);

  function MainChannelView() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainChannelView);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainChannelView).call(this));
    _this.state = {
      channel: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainChannelView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // const urlFetch = fetch(`http://api.tvmaze.com/shows/1/cast`)
      // urlFetch.then(res => {
      //   if (res.status === 200) {
      //     return res.json()
      //   }
      // }).then(resJson => {
      //   const datum = resJson.map(item => item.person)
      //   this.setState({
      //     channel: datum
      //   })
      // })
      var urlFetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('https://api.tvmaze.com/search/shows?q=batman');
      urlFetch.then(function (res) {
        if (res.status === 200) {
          return res.json();
        }
      }).then(function (resJson) {
        var datum = resJson.map(function (item) {
          return item.show;
        });

        _this2.setState({
          data: datum
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8"
      }, __jsx(Flex, null, __jsx("h3", null, this.props.title), __jsx("div", null, this.props.subtitle)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "12"
      }, __jsx(Grid, null, this.state.channel.splice(0, 5).map(function (item, i) {
        return __jsx(Components__WEBPACK_IMPORTED_MODULE_9__["VideosNews"], {
          title: item.name,
          name: item.genres,
          key: i,
          classname: i === 0 ? 'item item1' : 'item',
          image: item.image.original
        });
      }), __jsx(More, null, __jsx(Components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        name: this.props.moreIcon
      }), __jsx("label", null, this.props.moreLabel))))));
    }
  }]);

  return MainChannelView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainChannelView);

/***/ })

})
//# sourceMappingURL=index.js.289a9115a30b6a97a65f.hot-update.js.map