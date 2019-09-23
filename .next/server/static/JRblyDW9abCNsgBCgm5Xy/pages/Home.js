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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Yu4z");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HzHI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nxyH");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section`
  background: #fff2fe;
  padding: 2rem 0 4rem 2rem;
`;

const PeopleChannel = () => {
  return __jsx(Wrapper, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "8"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12"
  }, __jsx(Containers__WEBPACK_IMPORTED_MODULE_3__[/* MainChannelView */ "c"], {
    title: "People",
    subtitle: "View All",
    moreIcon: "all_out",
    moreLabel: "Show Your Work"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12",
    style: {
      marginTop: '50px'
    }
  }, __jsx(Containers__WEBPACK_IMPORTED_MODULE_3__[/* MainDocumentView */ "d"], {
    title: "Documents",
    subtitle: "Browse All Document",
    moreIcon: "add_circle_outline",
    moreLabel: "Share Your Document"
  })))), __jsx(Containers__WEBPACK_IMPORTED_MODULE_3__[/* ChannelView */ "b"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (PeopleChannel);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Ts7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nxyH");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section`
  background:  #fff2fe; 
  padding: 2rem 0;
`;

const VideosActivity = () => {
  return __jsx(Wrapper, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "8"
  }, __jsx(Containers__WEBPACK_IMPORTED_MODULE_3__[/* MainVideosView */ "e"], {
    title: "Videos",
    subtitle: "Browse All Videos",
    moreIcon: "cloud_upload",
    moreLabel: "Upload Your Own Videos"
  })), __jsx(Containers__WEBPACK_IMPORTED_MODULE_3__[/* ActivityView */ "a"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (VideosActivity);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Yu4z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./containers/index.jsx + 7 modules
var containers = __webpack_require__("nxyH");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./containers/layouts/header/sidebar.jsx
var __jsx = external_react_default.a.createElement;



const Side = external_styled_components_default.a.div`
  display: none;
  @media screen and (max-width: 600px){
    display: block;
    transition: all 0.3s ease-in;
    opacity: ${({
  showMenu
}) => showMenu ? 1 : 0};
    visibility: ${({
  showMenu
}) => showMenu ? 'visible' : 'collapse'};
    transform: translateX(${({
  showMenu
}) => showMenu ? '0' : '-300px'});
    z-index: 999999;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 251px;
    background: rgba(186, 52, 159, 1);
    color: #fff;
    ul {
      display: grid;
      list-style: none;
      .brand {
        font-weight: bold;
        font-size: 1.5em;
        padding: 30px 0;
        color: #fff;
        span {
          font-weight: normal;
        }
      }
      li {
        padding: 10px 5px;
        cursor: pointer;
        transition: all 0.2s;
        a {
          text-decoration: none;
          color: #fff;
        }
        &:hover {
          background-color: #fff;
          color: rgba(186, 52, 159, 1);
        }
      }
    }
  }
`;
const Overlay = external_styled_components_default.a.div`
  visibility: collapse;
  @media screen and (max-width: 600px){
    transition: all 0.1s ease;
    visibility: ${({
  showMenu
}) => showMenu ? 'visible' : 'collapse'};
    opacity: ${({
  showMenu
}) => showMenu ? 1 : 0};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(186, 52, 159, 0.5);
    z-index: 99999;
  }
`;
const menu = [{
  name: 'Videos',
  link: '#'
}, {
  name: 'People',
  link: '#'
}, {
  name: 'Documents',
  link: '#'
}, {
  name: 'Events',
  link: '#'
}, {
  name: 'Communities',
  link: '#'
}, {
  name: 'Favorites',
  link: '#'
}, {
  name: 'Channels',
  link: '#'
}];

const SidebarMobile = ({
  showMenu,
  setShowMenu
}) => {
  return __jsx(external_react_default.a.Fragment, null, __jsx(Side, {
    showMenu: showMenu
  }, __jsx("ul", null, __jsx("div", {
    className: "brand"
  }, __jsx(link_default.a, null, __jsx("a", null, "Social ", __jsx("span", null, "Network")))), menu.map((item, i) => {
    return __jsx("li", {
      key: i
    }, __jsx(link_default.a, {
      href: item.url
    }, __jsx("a", null, item.name)));
  }))), __jsx(Overlay, {
    showMenu: showMenu,
    onClick: () => setShowMenu(false)
  }));
};

/* harmony default export */ var sidebar = (SidebarMobile);
// CONCATENATED MODULE: ./containers/layouts/header/index.jsx
var header_jsx = external_react_default.a.createElement;





const links = [{
  href: 'home',
  label: 'Videos',
  slash: "/",
  active: true
}, {
  href: '',
  label: 'People',
  slash: "/"
}, {
  href: 'home',
  label: 'Documents',
  slash: "/"
}, {
  href: '',
  label: 'Events',
  slash: "/"
}, {
  href: 'home',
  label: 'Communities',
  slash: "/"
}, {
  href: '',
  label: 'Favorites',
  slash: "/"
}, {
  href: 'home',
  label: 'Channels'
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
}); // STYLES

const Wrapper = external_styled_components_default.a.header`
  background: #ba349f;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
  @media screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`;

const Header = () => {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(external_react_["useState"])(false);
  return header_jsx(Wrapper, null, header_jsx(sidebar, {
    showMenu: showMenu,
    setShowMenu: setShowMenu
  }), header_jsx(containers["g" /* Navbar */], {
    showMenu: showMenu,
    setShowMenu: setShowMenu
  }), header_jsx(containers["f" /* Nav */], {
    links: links
  }));
};

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./components/index.js + 10 modules
var components = __webpack_require__("e+cM");

// CONCATENATED MODULE: ./containers/layouts/footer/index.jsx
var footer_jsx = external_react_default.a.createElement;





const footer_Wrapper = external_styled_components_default.a.footer`
  background-color: #ba349f;
  color: #ffff;
  padding: 30px 0;
  ul {
    display: flex;
    justify-items: flex-start;
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      color: #fff;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    ul {
      a {
        font-size: 0.8em;
      }
      flex-direction: column;
      > div {
        display: none;
      }
    }
  }
`;
const SocialMedia = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    margin-right: 1rem;
    /* background-color: #fff; */
    width: 35px;
    height: 35px;
    cursor: pointer;
    img {
      width: 25px;
      height: 100%;
    }
  }
`;
const Slash = external_styled_components_default.a.span`
  margin: 0 ${({
  slash
}) => slash && `10px` || `0`};
  color: #fff;
  @media screen and (max-width: 600px) {
   display: none;
  }
`;
const footer_links = [{
  href: 'home',
  label: 'About',
  slash: "/"
}, {
  href: '',
  label: 'For Bussiness',
  slash: "/"
}, {
  href: 'home',
  label: 'Suggestions',
  slash: "/"
}, {
  href: '',
  label: 'Help & FAQ',
  slash: "/"
}, {
  href: 'home',
  label: 'Contacts',
  slash: "/"
}, {
  href: '',
  label: 'Pricing',
  slash: "/"
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

class footer_Footer extends external_react_default.a.Component {
  render() {
    return footer_jsx(footer_Wrapper, null, footer_jsx(external_reactstrap_["Container"], null, footer_jsx(external_reactstrap_["Row"], null, footer_jsx(external_reactstrap_["Col"], {
      md: "12",
      xs: "12"
    }, footer_jsx(SocialMedia, null, footer_jsx("div", null, footer_jsx("img", {
      src: "/static/facebook.svg"
    })), footer_jsx("div", null, footer_jsx("img", {
      src: "/static/linked.svg"
    })), footer_jsx("div", null, footer_jsx("img", {
      src: "/static/instagram.svg"
    }))))), footer_jsx(external_reactstrap_["Row"], {
      style: {
        margin: "30px 0"
      }
    }, footer_jsx(external_reactstrap_["Col"], {
      md: "12",
      xs: "12"
    }, footer_jsx("ul", null, footer_links.map((item, i) => footer_jsx(external_react_default.a.Fragment, null, footer_jsx("li", {
      className: item.active ? 'active' : null,
      key: i
    }, footer_jsx(link_default.a, {
      href: item.href
    }, footer_jsx("a", null, item.label))), footer_jsx(Slash, {
      slash: item.slash
    }, item.slash)))))), footer_jsx(external_reactstrap_["Row"], null, footer_jsx(external_reactstrap_["Col"], {
      md: "12",
      xs: "12"
    }, footer_jsx("p", null, footer_jsx("b", null, "\xA9CopyRight"), " by Ihsan 2019 Test FE Dev Salt.id")), footer_jsx(external_reactstrap_["Col"], {
      md: "12",
      xs: "12"
    }, footer_jsx("ul", null, footer_jsx("li", null, footer_jsx(link_default.a, {
      href: "#"
    }, footer_jsx("a", null, "Privacy"))), footer_jsx("div", {
      style: {
        margin: "0 10px"
      }
    }, "/"), footer_jsx("li", null, footer_jsx(link_default.a, {
      href: "#"
    }, footer_jsx("a", null, "Terms"))))))));
  }

}

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./containers/layouts/index.jsx
var layouts_jsx = external_react_default.a.createElement;




const Content = external_styled_components_default.a.main`

`;

const Layout = ({
  children
}) => {
  return layouts_jsx(external_react_default.a.Fragment, null, layouts_jsx(header, null), layouts_jsx(Content, null, children), layouts_jsx(footer, null));
};

/* harmony default export */ var layouts = (Layout);
// EXTERNAL MODULE: ./pages/Home/partials/VideosActivity/index.jsx
var VideosActivity = __webpack_require__("Ts7f");

// EXTERNAL MODULE: ./pages/Home/partials/PeopleChannel/index.jsx
var PeopleChannel = __webpack_require__("HzHI");

// CONCATENATED MODULE: ./pages/Home/index.jsx
var Home_jsx = external_react_default.a.createElement;





const Home = () => {
  return Home_jsx(layouts, null, Home_jsx(VideosActivity["default"], null), Home_jsx(PeopleChannel["default"], null));
};

/* harmony default export */ var pages_Home = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/button/index.js
var __jsx = external_react_default.a.createElement;


 // STYLES

const ButtonStyle = external_styled_components_default.a.button`
  width: ${({
  block
}) => block && `100%`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.5s;
  &:hover {
    background: #fff;
    color: #ba349f;
  }
`;

const Button = ({
  children,
  block,
  icon
}) => {
  return __jsx(ButtonStyle, {
    block: block
  }, __jsx(atoms_icon, {
    name: icon,
    style: {
      marginRight: '5px'
    }
  }), children);
};

/* harmony default export */ var atoms_button = (Button);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./components/atoms/icon/index.js


var icon_jsx = external_react_default.a.createElement;



const Icon = (_ref) => {
  let {
    name,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "style"]);

  const IconStyle = external_styled_components_default.a.i`
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    vertical-align: middle;
  `;
  return icon_jsx(IconStyle, _extends({
    className: "material-icons",
    style: style
  }, props), name);
};

/* harmony default export */ var atoms_icon = (Icon);
// CONCATENATED MODULE: ./components/molecules/search/index.js
var search_jsx = external_react_default.a.createElement;


 // STYLES

const SearchStyle = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Input = external_styled_components_default.a.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #fff;
  font-size: 1em;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 10px rgba(255,255,255,0.5);
  }
`;
const WrapIcon = external_styled_components_default.a.div`
  position: absolute;
  right: 5px;
`;

const Search = () => {
  return search_jsx(SearchStyle, null, search_jsx(Input, {
    placeholder: "Find.."
  }), search_jsx(WrapIcon, null, search_jsx(atoms_icon, {
    name: "search"
  })));
};

/* harmony default export */ var search = (Search);
// CONCATENATED MODULE: ./components/molecules/author/index.js
var author_jsx = external_react_default.a.createElement;


const WrapAuthor = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  align-content: center;
  color: #fff;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #d149b6;
  }
`;
const Avatar = external_styled_components_default.a.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 10px;
`;
const Name = external_styled_components_default.a.h6`
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const Author = ({
  url,
  name,
  onHover,
  onLeave
}) => {
  return author_jsx(WrapAuthor, {
    onMouseEnter: onHover,
    onMouseLeave: onLeave
  }, author_jsx(Avatar, {
    style: {
      backgroundImage: `url(${url})`
    }
  }), author_jsx(Name, null, name));
};

/* harmony default export */ var author = (Author);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/molecules/videosNews/index.js
var videosNews_jsx = external_react_default.a.createElement;



const MainWrap = external_styled_components_default.a.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in;
  &:hover {
    > div:nth-of-type(1) {
      transform: scale(1.1);
    }
  }
`;
const Wrapper = external_styled_components_default.a.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
  padding: 10px 10px 0 10px;
  color: #fff;
`;
const Wrap = external_styled_components_default.a.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
  background-size: cover;
`;
const Title = external_styled_components_default.a.h3`
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  transition: all 0.3s ease;
  &:hover {
    a {
      display: flex;
      align-items: center;
      justify-items: flex-start;
      color: #ba349f;
      background: #fff;
      padding: 2px;
      border-radius: 4px;
    }
  }
`;
const videosNews_Author = external_styled_components_default.a.p`
  color: #ffff;
`;
const Views = external_styled_components_default.a.p``;

const VideosNews = ({
  image,
  classname,
  name,
  views,
  title
}) => {
  return videosNews_jsx(MainWrap, {
    className: classname
  }, videosNews_jsx(Wrap, {
    style: {
      backgroundImage: `url(${image})`
    }
  }), videosNews_jsx(Wrapper, null, videosNews_jsx(Title, null, videosNews_jsx(link_default.a, {
    href: "#"
  }, videosNews_jsx("a", null, title))), videosNews_jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, videosNews_jsx(videosNews_Author, null, name), videosNews_jsx(Views, null, views))));
};

/* harmony default export */ var videosNews = (VideosNews);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/molecules/newsActivity/index.js
var newsActivity_jsx = external_react_default.a.createElement;





const ViewImage = external_styled_components_default.a.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
`;
const newsActivity_Wrap = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
`;
const newsActivity_Title = external_styled_components_default.a.h3`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
  padding: 0;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    text-decoration: none;
    color: #38243a;
    transition: all 0.2s; 
  }
  &:hover {
    a {
      color: #ba349f;
    }
  }
`;
const Desc = external_styled_components_default.a.div`
  font-size: 0.8em;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
`;
const newsActivity_Date = external_styled_components_default.a.div`
  font-size: 0.7em;
  color: #7d7c7c;
  i {
    margin-right: 0.5rem;
    font-size: 1.2em;
  }
`;
const NewRow = external_styled_components_default()(external_reactstrap_["Row"])`
  margin-bottom: 15px;
  padding: 3px;
  box-sizing: border-box;
  transition: all 0.2s ease; 
  position: relative;
  border: ${({
  active
}) => active ? `1px solid #ba349f` : `none`} ;
  &:hover {
    border: 1px solid #ba349f;
  }
`;
const Close = external_styled_components_default.a.div`
  visibility: ${({
  active
}) => active ? `visible` : `collapse`};
  opacity: ${({
  active
}) => active ? 1 : 0};
  color: #fff;
  position: absolute;
  width: 0;
  height: 0;
  cursor: pointer;
  border-right: 50px solid #ba349f;
  border-bottom: 40px solid transparent;
  top: 0;
  right: 0;
  i {
    font-size: 1em;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`;

const NewsActivity = ({
  image,
  title,
  desc,
  time
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  return newsActivity_jsx(NewRow, {
    active: active,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false)
  }, newsActivity_jsx(external_reactstrap_["Col"], {
    md: "4",
    xs: "4"
  }, newsActivity_jsx(ViewImage, {
    style: {
      backgroundImage: `url(${image})`
    }
  })), newsActivity_jsx(external_reactstrap_["Col"], {
    md: "7",
    xs: "4"
  }, newsActivity_jsx(newsActivity_Wrap, null, newsActivity_jsx(newsActivity_Title, null, newsActivity_jsx(link_default.a, {
    href: "#"
  }, newsActivity_jsx("a", null, title))), newsActivity_jsx(Desc, {
    dangerouslySetInnerHTML: {
      __html: desc
    }
  }), newsActivity_jsx(newsActivity_Date, null, newsActivity_jsx(atoms_icon, {
    name: "message"
  }), time))), newsActivity_jsx(Close, {
    active: active
  }, newsActivity_jsx(atoms_icon, {
    name: "close"
  })));
};

/* harmony default export */ var newsActivity = (NewsActivity);
// CONCATENATED MODULE: ./components/molecules/channelItem/index.js
var channelItem_jsx = external_react_default.a.createElement;



const CardItem = external_styled_components_default.a.div`
  /* border: 1px solid purple; */
  height: 19.5vh;
  padding: 11px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position-y: -20px;
  overflow: hidden;
  label {
    background: #b560a4;
    color: #ffff;
    font-weight: bolder;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const Plus = external_styled_components_default.a.div`
  visibility: ${({
  active,
  show
}) => active || show ? `visible` : `collapse`};
  opacity: ${({
  active,
  show
}) => active || show ? 1 : 0};
  color: #fff;
  position: absolute;
  width: 0;
  height: 0;
  cursor: pointer;
  border-right: 50px solid #ba349f;
  border-bottom: 30px solid transparent;
  top: 0;
  right: 0;
  i {
    font-size: 1em;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 20px;
  }
`;

const ChannelItem = ({
  label,
  image,
  active
}) => {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  return channelItem_jsx(CardItem, {
    style: {
      backgroundImage: `url(${image})`
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, channelItem_jsx("label", null, label), channelItem_jsx(Plus, {
    active: active,
    show: show
  }, channelItem_jsx(atoms_icon, {
    name: "add"
  })));
};

/* harmony default export */ var channelItem = (ChannelItem);
// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "b", function() { return atoms_button; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "d", function() { return atoms_icon; });
/* concated harmony reexport Search */__webpack_require__.d(__webpack_exports__, "f", function() { return search; });
/* concated harmony reexport Author */__webpack_require__.d(__webpack_exports__, "a", function() { return author; });
/* concated harmony reexport VideosNews */__webpack_require__.d(__webpack_exports__, "g", function() { return videosNews; });
/* concated harmony reexport NewsActivity */__webpack_require__.d(__webpack_exports__, "e", function() { return newsActivity; });
/* concated harmony reexport ChannelItem */__webpack_require__.d(__webpack_exports__, "c", function() { return channelItem; });
// ATOMS

 // MOLECULES







/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nxyH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./containers/organism/nav/index.jsx
var __jsx = external_react_default.a.createElement;




const WrapNav = external_styled_components_default.a.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style : none;
    margin: 20px 0;
    li {
      padding: 10px 15px;
      a {
        color: #fff;
        text-decoration: none;
      }
      &:hover {
        border-bottom: 1.5px solid #fff;
      }
      transition: all 0.2s linear;
      &.active {
        border-bottom: 1.5px solid #fff;
      }
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
const Slash = external_styled_components_default.a.span`
  margin: 0 ${({
  slash
}) => slash && `10px` || `0`};
  color: #fff;
`;

const Nav = ({
  links
}) => {
  return __jsx(WrapNav, null, __jsx(external_reactstrap_["Container"], null, __jsx("ul", null, links.map(({
    key,
    href,
    label,
    slash,
    active = false
  }) => __jsx(external_react_default.a.Fragment, null, __jsx("li", {
    className: active ? 'active' : null,
    key: key
  }, __jsx(link_default.a, {
    href: href
  }, __jsx("a", null, label))), __jsx(Slash, {
    slash: slash
  }, slash))))));
};

/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: ./components/index.js + 10 modules
var components = __webpack_require__("e+cM");

// CONCATENATED MODULE: ./containers/page/navbar/index.jsx
var navbar_jsx = external_react_default.a.createElement;



 // STYLES

const Title = external_styled_components_default.a.h1`
  font-size: 2.2em;
  color: #ffff;
  span {
    font-weight: lighter;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;
const RowCustome = external_styled_components_default()(external_reactstrap_["Row"])`
  align-items: center;
`;
const ContainerCustome = external_styled_components_default()(external_reactstrap_["Container"])`
  padding: 10px 0;
`;
const DetailAuthor = external_styled_components_default.a.div`
  position: absolute;
  /* padding : 20px 30px; */
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 3px 10px rgba(186, 52, 159, 0.5);
  right: 0;
  top: 50px;
  z-index: 10;
  transition: all 0.3s ease;
  transform: translateY(${({
  show
}) => show ? '0' : '-15px'}); 
  opacity: ${({
  show
}) => show ? 1 : 0}
  h6 {
    text-align: center;
  }
`;
const Avatar = external_styled_components_default.a.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 50px 10px 50px;
`;
const Action = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
  > div {
    padding: 5px 20px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    color: #717171;
    i {
      font-size: 1.2em;
      margin-right: 0.5rem;
    }
    &:hover {
      background-color: #eee;
    }
  }
`;
const Burger = external_styled_components_default.a.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    cursor: pointer;
    > div {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin-bottom: 5px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }    
  }
`;
const WrapMenu = external_styled_components_default.a.div`
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Navbar = ({
  setShowMenu
}) => {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  return navbar_jsx(ContainerCustome, null, navbar_jsx(RowCustome, null, navbar_jsx(external_reactstrap_["Col"], {
    md: "3",
    xs: "12"
  }, navbar_jsx(WrapMenu, null, navbar_jsx(Title, null, "Social ", navbar_jsx("span", null, "Network")), navbar_jsx(Burger, {
    onClick: () => setShowMenu(true)
  }, navbar_jsx("div", null), navbar_jsx("div", null), navbar_jsx("div", null)))), navbar_jsx(external_reactstrap_["Col"], {
    md: "5",
    xs: "6"
  }, navbar_jsx(components["f" /* Search */], null)), navbar_jsx(external_reactstrap_["Col"], {
    md: "auto",
    xs: "3"
  }, navbar_jsx(components["b" /* Button */], {
    block: true,
    icon: "cloud_upload"
  }, "Upload")), navbar_jsx(external_reactstrap_["Col"], {
    md: {
      offset: 1
    }
  }, navbar_jsx("div", {
    style: {
      position: 'relative'
    }
  }, navbar_jsx(components["a" /* Author */], {
    onHover: () => setShow(true),
    onLeave: () => setShow(false),
    name: "Ihsan",
    url: "/static/avatar-placeholder.gif"
  }), navbar_jsx(DetailAuthor, {
    show: show
  }, navbar_jsx(Avatar, {
    style: {
      backgroundImage: `url('/static/avatar-placeholder.gif')`
    }
  }), navbar_jsx("h6", null, "Ihsan"), navbar_jsx(Action, null, navbar_jsx("div", null, navbar_jsx(components["d" /* Icon */], {
    name: "settings"
  }), " Pengaturan"), navbar_jsx("div", null, navbar_jsx(components["d" /* Icon */], {
    name: "reply"
  }), " Logout")))))));
};

/* harmony default export */ var navbar = (Navbar);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./containers/organism/mainVideosView/index.jsx
var mainVideosView_jsx = external_react_default.a.createElement;





const Grid = external_styled_components_default.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 20vh 20vh 20vh;
  overflow: hidden;
  grid-gap: 1.1rem;
  .item {
    background-size: cover;
    background-repeat: no-repeat;
    h3 {
      font-size: 0.8em;
      padding: 0;
    }
    p {
      padding: 0;
      font-size: 0.6em;
    }
  }
  .item1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    h3 {
      font-size: 1.5em;
    }
    p {
      padding: 0;
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 600px) {
    .item1 {
        grid-column: 1 / span 3;
      }
      grid-template-rows: 20vh 20vh 20vh 20vh;
    }
  `;
const Flex = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  > div {
    color: #ba349f;
  }
`;
const More = external_styled_components_default.a.div`
  background-color: #b560a4;
  display: flex;
  justify-content:center;
  justify-items: center;
  align-items: center;
  color: #fff;
  padding: 0 15px;
  font-weight: bolder;
  font-size: 1em;
  cursor: pointer;
  i {
    margin-right: 1rem;
    font-size: 2em;
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    label {
      font-size: 0.7em;
    }
  }
`;

class mainVideosView_MainVideosView extends external_react_["Component"] {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const urlFetch = external_isomorphic_unfetch_default()('https://api.tvmaze.com/search/shows?q=batman');
    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json();
      }
    }).then(resJson => {
      const datum = resJson.map(item => item.show);
      this.setState({
        data: datum
      });
    });
  }

  render() {
    console.log(this.state.data);
    return mainVideosView_jsx(external_react_default.a.Fragment, null, mainVideosView_jsx(external_reactstrap_["Row"], null, mainVideosView_jsx(external_reactstrap_["Col"], {
      md: "8"
    }, mainVideosView_jsx(Flex, null, mainVideosView_jsx("h3", null, this.props.title), mainVideosView_jsx("div", null, this.props.subtitle)))), mainVideosView_jsx(external_reactstrap_["Row"], null, mainVideosView_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, mainVideosView_jsx(Grid, null, this.state.data.splice(0, 5).map((item, i) => {
      return mainVideosView_jsx(components["g" /* VideosNews */], {
        title: item.name,
        name: item.genres,
        views: item.language,
        key: i,
        classname: i === 0 ? 'item item1' : 'item',
        image: item.image.original
      });
    }), mainVideosView_jsx(More, null, mainVideosView_jsx(components["d" /* Icon */], {
      name: this.props.moreIcon
    }), mainVideosView_jsx("label", null, this.props.moreLabel))))));
  }

}

/* harmony default export */ var mainVideosView = (mainVideosView_MainVideosView);
// CONCATENATED MODULE: ./containers/organism/mainChannelView/index.jsx
var mainChannelView_jsx = external_react_default.a.createElement;





const mainChannelView_Grid = external_styled_components_default.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 20vh 20vh 20vh;
  overflow: hidden;
  grid-gap: 1.1rem;
  .item {
    background-size: cover;
    background-repeat: no-repeat;
    h3 {
      font-size: 0.8em;
      padding: 0;
    }
    p {
      padding: 0;
      font-size: 0.6em;
    }
  }
  .item1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    h3 {
      font-size: 1.5em;
    }
    p {
      padding: 0;
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 600px) {
    .item1 {
        grid-column: 1 / span 3;
      }
      grid-template-rows: 20vh 20vh 20vh 20vh;
    }
`;
const mainChannelView_Flex = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  > div {
    color: #ba349f;
  }
`;
const mainChannelView_More = external_styled_components_default.a.div`
  background-color: #b560a4;
  display: flex;
  justify-content:center;
  justify-items: center;
  align-items: center;
  color: #fff;
  padding: 0 15px;
  font-weight: bolder;
  font-size: 1em;
  cursor: pointer;
  i {
    margin-right: 1rem;
    font-size: 2em;
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    label {
      font-size: 0.7em;
    }
  }
`;

class mainChannelView_MainChannelView extends external_react_["Component"] {
  constructor() {
    super();
    this.state = {
      channel: []
    };
  }

  componentDidMount() {
    const urlFetch = external_isomorphic_unfetch_default()(`http://api.tvmaze.com/shows/1/cast`);
    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json();
      }
    }).then(resJson => {
      const datum = resJson.map(item => item.person);
      this.setState({
        channel: datum
      });
    });
  }

  render() {
    console.log(this.state.channel);
    return mainChannelView_jsx(external_react_default.a.Fragment, null, mainChannelView_jsx(external_reactstrap_["Row"], null, mainChannelView_jsx(external_reactstrap_["Col"], {
      md: "8"
    }, mainChannelView_jsx(mainChannelView_Flex, null, mainChannelView_jsx("h3", null, this.props.title), mainChannelView_jsx("div", null, this.props.subtitle)))), mainChannelView_jsx(external_reactstrap_["Row"], null, mainChannelView_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, mainChannelView_jsx(mainChannelView_Grid, null, this.state.channel.splice(0, 5).map((item, i) => {
      return mainChannelView_jsx(components["g" /* VideosNews */], {
        title: item.name,
        name: item.country.name,
        key: i,
        classname: i === 0 ? 'item item1' : 'item',
        image: item.image.original
      });
    }), mainChannelView_jsx(mainChannelView_More, null, mainChannelView_jsx(components["d" /* Icon */], {
      name: this.props.moreIcon
    }), mainChannelView_jsx("label", null, this.props.moreLabel))))));
  }

}

/* harmony default export */ var mainChannelView = (mainChannelView_MainChannelView);
// CONCATENATED MODULE: ./containers/organism/mainDocumentView/index.jsx
var mainDocumentView_jsx = external_react_default.a.createElement;





const mainDocumentView_Grid = external_styled_components_default.a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 20vh 20vh 20vh;
  overflow: hidden;
  grid-gap: 1.1rem;
  .item {
    background-size: cover;
    background-repeat: no-repeat;
    h3 {
      font-size: 0.8em;
      padding: 0;
    }
    p {
      padding: 0;
      font-size: 0.6em;
    }
  }
  .item1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    h3 {
      font-size: 1.5em;
    }
    p {
      padding: 0;
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 600px) {
    .item1 {
        grid-column: 1 / span 3;
      }
      grid-template-rows: 20vh 20vh 20vh 20vh;
    }
`;
const mainDocumentView_Flex = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  > div {
    color: #ba349f;
  }
`;
const mainDocumentView_More = external_styled_components_default.a.div`
  background-color: #b560a4;
  display: flex;
  justify-content:center;
  justify-items: center;
  align-items: center;
  color: #fff;
  padding: 0 15px;
  font-weight: bolder;
  font-size: 1em;
  cursor: pointer;
  i {
    margin-right: 1rem;
    font-size: 2em;
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    label {
      font-size: 0.7em;
    }
  }
`;

class mainDocumentView_MainDocumentView extends external_react_["Component"] {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const urlfetch = external_isomorphic_unfetch_default()(`http://api.tvmaze.com/schedule`);
    urlfetch.then(res => {
      if (res.status === 200) {
        return res.json();
      }
    }).then(resJson => {
      const datum = resJson.map(item => item.show);
      this.setState({
        data: datum
      });
    });
  }

  render() {
    console.log(this.state.data);
    return mainDocumentView_jsx(external_react_default.a.Fragment, null, mainDocumentView_jsx(external_reactstrap_["Row"], null, mainDocumentView_jsx(external_reactstrap_["Col"], {
      md: "8"
    }, mainDocumentView_jsx(mainDocumentView_Flex, null, mainDocumentView_jsx("h3", null, this.props.title), mainDocumentView_jsx("div", null, this.props.subtitle)))), mainDocumentView_jsx(external_reactstrap_["Row"], null, mainDocumentView_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, mainDocumentView_jsx(mainDocumentView_Grid, null, this.state.data.splice(0, 5).map((item, i) => {
      return mainDocumentView_jsx(components["g" /* VideosNews */], {
        title: item.name,
        name: item.genres,
        key: i,
        classname: i === 0 ? 'item item1' : 'item',
        image: item.image.original
      });
    }), mainDocumentView_jsx(mainDocumentView_More, null, mainDocumentView_jsx(components["d" /* Icon */], {
      name: this.props.moreIcon
    }), mainDocumentView_jsx("label", null, this.props.moreLabel))))));
  }

}

/* harmony default export */ var mainDocumentView = (mainDocumentView_MainDocumentView);
// CONCATENATED MODULE: ./containers/organism/activityView/index.jsx
var activityView_jsx = external_react_default.a.createElement;




const activityView_Flex = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1.5px solid #ba349f;
  margin-bottom: 0.5rem;
  > div {
    font-size: 0.8em;
    color: #ba349f;
  }
`;
const Wrapper = external_styled_components_default.a.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 430px;
  box-sizing: border-box;
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

class activityView_ActivityView extends external_react_["Component"] {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const urlFetch = fetch('https://api.tvmaze.com/search/shows?q=batman');
    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json();
      }
    }).then(resJson => {
      const datum = resJson.map(item => item.show);
      this.setState({
        data: datum
      });
    });
  }

  render() {
    return activityView_jsx(external_reactstrap_["Col"], {
      md: "4"
    }, activityView_jsx(external_reactstrap_["Row"], null, activityView_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, activityView_jsx(activityView_Flex, null, activityView_jsx("h3", null, "Activity"), activityView_jsx("div", null, "View Timelines / Filter Activies")))), activityView_jsx(Wrapper, null, this.state.data.map((item, i) => {
      return activityView_jsx(components["e" /* NewsActivity */], {
        title: item.name,
        desc: item.summary,
        time: item.type,
        key: i,
        image: item.image.original
      });
    })));
  }

}

/* harmony default export */ var activityView = (activityView_ActivityView);
// CONCATENATED MODULE: ./containers/organism/ChannelView/index.jsx
var ChannelView_jsx = external_react_default.a.createElement;





const ChannelView_Wrapper = external_styled_components_default.a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1.4rem;
  overflow-y: auto;
  overflow-x: hidden;
  height: 600px;
  box-sizing: border-box;
   /* width */
   ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;
const ChannelView_Flex = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1.5px solid #ba349f;
  margin-bottom: 0.5rem;
  > div {
    font-size: 0.8em;
    color: #ba349f;
  }
`;

class ChannelView_ChannelView extends external_react_["Component"] {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const urlFetch = external_isomorphic_unfetch_default()(`http://api.tvmaze.com/seasons/1/episodes`);
    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json();
      }
    }).then(resJson => {
      this.setState({
        data: resJson
      });
    });
  }

  render() {
    console.log(this.state.data);
    return ChannelView_jsx(external_reactstrap_["Col"], {
      md: "4"
    }, ChannelView_jsx(external_reactstrap_["Row"], null, ChannelView_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, ChannelView_jsx(ChannelView_Flex, null, ChannelView_jsx("h3", null, "Channels"), ChannelView_jsx("div", null, "Browse All Channel")))), ChannelView_jsx(ChannelView_Wrapper, null, this.state.data.splice(0, 20).map((item, i) => {
      return ChannelView_jsx(components["c" /* ChannelItem */], {
        key: i,
        label: item.name,
        image: item.image.original
      });
    })));
  }

}

/* harmony default export */ var organism_ChannelView = (ChannelView_ChannelView);
// CONCATENATED MODULE: ./containers/index.jsx
/* concated harmony reexport Nav */__webpack_require__.d(__webpack_exports__, "f", function() { return nav; });
/* concated harmony reexport Navbar */__webpack_require__.d(__webpack_exports__, "g", function() { return navbar; });
/* concated harmony reexport MainVideosView */__webpack_require__.d(__webpack_exports__, "e", function() { return mainVideosView; });
/* concated harmony reexport MainChannelView */__webpack_require__.d(__webpack_exports__, "c", function() { return mainChannelView; });
/* concated harmony reexport MainDocumentView */__webpack_require__.d(__webpack_exports__, "d", function() { return mainDocumentView; });
/* concated harmony reexport ActivityView */__webpack_require__.d(__webpack_exports__, "a", function() { return activityView; });
/* concated harmony reexport ChannelView */__webpack_require__.d(__webpack_exports__, "b", function() { return organism_ChannelView; });








/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })

/******/ });