webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/organism/ChannelView/index.jsx":
/*!***************************************************!*\
  !*** ./containers/organism/ChannelView/index.jsx ***!
  \***************************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components */ "./components/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 1.5px solid #ba349f;\n  margin-bottom: 0.5rem;\n  > div {\n    font-size: 0.8em;\n    color: #ba349f;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 1em;\n  grid-row-gap: 1.4rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 600px;\n  box-sizing: border-box;\n   /* width */\n   ::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #f1f1f1; \n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888; \n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555; \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());

var ChannelView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChannelView, _Component);

  function ChannelView() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChannelView);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelView).call(this));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChannelView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // const urlFetch = fetch(`http://api.tvmaze.com/seasons/1/episodes`)
      // urlFetch.then(res => {
      //   if (res.status === 200) {
      //     return res.json()
      //   }
      // }).then(resJson => {
      //   this.setState({
      //     data: resJson
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
      console.log(this.state.data);
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "4"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "12"
      }, __jsx(Flex, null, __jsx("h3", null, "Channels"), __jsx("div", null, "Browse All Channel")))), __jsx(Wrapper, null, this.state.data.splice(0, 20).map(function (item, i) {
        return __jsx(Components__WEBPACK_IMPORTED_MODULE_8__["ChannelItem"], {
          key: i,
          label: item.name,
          image: item.image.original
        });
      })));
    }
  }]);

  return ChannelView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ChannelView);

/***/ })

})
//# sourceMappingURL=index.js.f1460c138ceda7b7dfa5.hot-update.js.map