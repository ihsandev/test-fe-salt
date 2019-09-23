webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Home/index.jsx":
/*!******************************!*\
  !*** ./pages/Home/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Layouts */ "./containers/layouts/index.jsx");
/* harmony import */ var _partials_VideosActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/VideosActivity */ "./pages/Home/partials/VideosActivity/index.jsx");
/* harmony import */ var _partials_PeopleChannel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/PeopleChannel */ "./pages/Home/partials/PeopleChannel/index.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      batman = _useState[0],
      setBatman = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      cast = _useState2[0],
      setCast = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchbatman = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/search/shows?q=batman", {
      method: 'GET'
    });
    var fetchcast = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://api.tvmaze.com/shows/1/cast", {
      method: 'GET'
    });
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([fetchbatman, fetchcast]).then(function (values) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(values.map(function (value) {
        return value.json();
      }));
    }).then(function (finalValues) {
      setBatman(finalValues[0].show);
      setCast(finalValues[1]);
    });
  }, []);
  return __jsx(Layouts__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_partials_VideosActivity__WEBPACK_IMPORTED_MODULE_3__["default"], {
    batman: batman
  }), __jsx(_partials_PeopleChannel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cast: cast
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c1fa02b2065b8094906d.hot-update.js.map