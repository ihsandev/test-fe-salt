webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Home/index.jsx":
/*!******************************!*\
  !*** ./pages/Home/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Layouts */ "./containers/layouts/index.jsx");
/* harmony import */ var _partials_VideosActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/VideosActivity */ "./pages/Home/partials/VideosActivity/index.jsx");
/* harmony import */ var _partials_PeopleChannel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/PeopleChannel */ "./pages/Home/partials/PeopleChannel/index.jsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Home = function Home(_ref) {
  var shows = _ref.shows;
  console.log(shows);
  return __jsx(Layouts__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_partials_VideosActivity__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_partials_PeopleChannel__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log('ini' + data);
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fc8304e3a2c8f4098459.hot-update.js.map