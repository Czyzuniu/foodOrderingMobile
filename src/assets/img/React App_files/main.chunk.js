(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n\n.App {\n  height: 100vh;\n}\n\n\n#content {\n    height: 94vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image:url(\"/img/bg.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n\n#restaurantCardButtonContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#restaurantCardContainer {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n#timeContainers {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/Home */ "./src/screens/Home.js");
/* harmony import */ var _screens_Restaurants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/Restaurants */ "./src/screens/Restaurants.js");
/* harmony import */ var _screens_Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/Register */ "./src/screens/Register.js");
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screens/Login */ "./src/screens/Login.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _screens_SetRestaurant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screens/SetRestaurant */ "./src/screens/SetRestaurant.js");
/* harmony import */ var _screens_AddMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screens/AddMenu */ "./src/screens/AddMenu.js");
/* harmony import */ var _screens_ViewOrders__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screens/ViewOrders */ "./src/screens/ViewOrders.js");
/* harmony import */ var _screens_ViewMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screens/ViewMenu */ "./src/screens/ViewMenu.js");
/* harmony import */ var _screens_SetOpeningTimes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./screens/SetOpeningTimes */ "./src/screens/SetOpeningTimes.js");
/* harmony import */ var _screens_EditRestaurant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screens/EditRestaurant */ "./src/screens/EditRestaurant.js");
/* harmony import */ var _screens_AddPhotos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./screens/AddPhotos */ "./src/screens/AddPhotos.js");






var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/App.js";


















var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    return Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (localStorage.getItem('foodApp') == "null" || localStorage.getItem('foodApp') == null) {
        localStorage.setItem('foodApp', JSON.stringify({
          sessionId: null,
          authenticatedUser: {}
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_TopBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/login",
        component: _screens_Login__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/register",
        component: _screens_Register__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/",
        component: _screens_Restaurants__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/restaurants",
        component: _screens_Restaurants__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/setRestaurant",
        component: _screens_SetRestaurant__WEBPACK_IMPORTED_MODULE_16__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/addMenu",
        component: _screens_AddMenu__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/viewOrders",
        component: _screens_ViewOrders__WEBPACK_IMPORTED_MODULE_18__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/addPhotos",
        component: _screens_AddPhotos__WEBPACK_IMPORTED_MODULE_22__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/viewMenu",
        component: _screens_ViewMenu__WEBPACK_IMPORTED_MODULE_19__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/setOpeningTimes",
        component: _screens_SetOpeningTimes__WEBPACK_IMPORTED_MODULE_20__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PrivateRoute, {
        exact: true,
        path: "/editRestaurant",
        component: _screens_EditRestaurant__WEBPACK_IMPORTED_MODULE_21__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

var PrivateRoute =
/*#__PURE__*/
function (_Component2) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PrivateRoute, _Component2);

  function PrivateRoute() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PrivateRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PrivateRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: true,
      isAuthenticated: false
    };
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PrivateRoute, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _components_Utils__WEBPACK_IMPORTED_MODULE_15__["default"].isAuthenticated().then(function (isAuthenticated) {
        console.log(isAuthenticated, 'imback');

        _this2.setState({
          isAuthenticated: isAuthenticated,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Component = _this$props.component,
          rest = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component"]);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], Object.assign({}, rest, {
        render: function render(props) {
          return _this3.state.isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object.assign({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          })) : _this3.state.loading ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            id: "content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
            color: "secondary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
            to: {
              pathname: '/login',
              state: {
                from: _this3.props.location
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }));
    }
  }]);

  return PrivateRoute;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./src/assets/img/restaurant_example.jpeg":
/*!************************************************!*\
  !*** ./src/assets/img/restaurant_example.jpeg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/restaurant_example.73f7c758.jpeg";

/***/ }),

/***/ "./src/assets/img/restaurant_example1.jpg":
/*!************************************************!*\
  !*** ./src/assets/img/restaurant_example1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/restaurant_example1.0bc8761e.jpg";

/***/ }),

/***/ "./src/components/AddMenuItemColumn.js":
/*!*********************************************!*\
  !*** ./src/components/AddMenuItemColumn.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/AddMenuItemColumn.js";









var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    },
    delete: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

var foodTypes = [{
  value: 'MT_STARTER',
  label: 'Starter'
}, {
  value: 'MT_MAIN',
  label: 'Main'
}, {
  value: 'MT_DSRT',
  label: 'Dessert'
}, {
  value: 'MT_SNK',
  label: 'Snack'
}, {
  value: 'MT_DRINK',
  label: 'Drink'
}];

var AddMenuItemColumn =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddMenuItemColumn, _React$Component);

  function AddMenuItemColumn(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddMenuItemColumn);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddMenuItemColumn).call(this, props));
    _this.menuItem = _this.props.menuItem;
    _this.state = {
      PRODUCT_NAME: !_this.menuItem ? "" : _this.menuItem.PRODUCT_NAME,
      PRODUCT_DESCRIPTION: !_this.menuItem ? "" : _this.menuItem.PRODUCT_DESCRIPTION,
      PRODUCT_PRICE: !_this.menuItem ? "" : _this.menuItem.PRODUCT_PRICE,
      PRODUCT_MENU_TYPE: !_this.menuItem ? "" : _this.menuItem.PRODUCT_MENU_TYPE
    };
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddMenuItemColumn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: classes.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        required: true,
        id: "outlined-name",
        label: "Product name",
        value: this.state.PRODUCT_NAME,
        className: classes.textField,
        margin: "normal",
        variant: "outlined",
        onChange: function onChange(e) {
          _this2.setState({
            'PRODUCT_NAME': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "outlined-uncontrolled",
        label: "Product description",
        value: this.state.PRODUCT_DESCRIPTION,
        className: classes.textField,
        margin: "normal",
        variant: "outlined",
        onChange: function onChange(e) {
          return _this2.setState({
            PRODUCT_DESCRIPTION: e.target.value
          });
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        required: true,
        id: "outlined-required",
        value: this.state.PRODUCT_PRICE,
        label: "Price",
        className: classes.textField,
        margin: "normal",
        variant: "outlined",
        onChange: function onChange(e) {
          return _this2.setState({
            PRODUCT_PRICE: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        required: true,
        id: "outlined-select-currency",
        select: true,
        label: "Product type",
        value: this.state.PRODUCT_MENU_TYPE,
        className: classes.textField,
        SelectProps: {
          MenuProps: {
            className: classes.menu
          }
        },
        helperText: "Please select food type",
        margin: "normal",
        variant: "outlined",
        onChange: function onChange(e) {
          return _this2.setState({
            PRODUCT_MENU_TYPE: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, foodTypes.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
          key: option.value,
          value: option.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, option.label);
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classes.delete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "contained",
        color: "secondary",
        size: "large",
        onClick: function onClick() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Delete from menu")));
    }
  }]);

  return AddMenuItemColumn;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

AddMenuItemColumn.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(AddMenuItemColumn));

/***/ }),

/***/ "./src/components/AlertDialogSlide.js":
/*!********************************************!*\
  !*** ./src/components/AlertDialogSlide.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/Slide/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/AlertDialogSlide.js";









function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_12___default.a, Object.assign({
    direction: "up"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

var AlertDialogSlide =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AlertDialogSlide, _React$Component);

  function AlertDialogSlide() {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AlertDialogSlide);

    return Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AlertDialogSlide).apply(this, arguments));
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AlertDialogSlide, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default.a, {
        open: this.props.open,
        TransitionComponent: Transition,
        keepMounted: true,
        onClose: this.props.onClose,
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "alert-dialog-slide-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "alert-dialog-slide-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.message)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onClick: this.props.handleYes,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onClick: this.props.handleNo,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "No")));
    }
  }]);

  return AlertDialogSlide;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlertDialogSlide);

/***/ }),

/***/ "./src/components/AppContext.js":
/*!**************************************!*\
  !*** ./src/components/AppContext.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./src/components/Chips.js":
/*!*********************************!*\
  !*** ./src/components/Chips.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/TagFaces */ "./node_modules/@material-ui/icons/TagFaces.js");
/* harmony import */ var _material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TagFaces__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/Chips.js";







var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: theme.spacing.unit / 2,
      maxWidth: 220,
      maxHeight: 150,
      overflow: 'auto'
    },
    chip: {
      margin: theme.spacing.unit / 2
    }
  };
};

var Chips =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Chips, _React$Component);

  function Chips() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Chips);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Chips)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      chipData: _this.props.chipData
    };

    _this.handleDelete = function (data) {
      return function () {
        _this.setState(function (state) {
          var chipData = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.chipData);

          var chipToDelete = chipData.indexOf(data);
          chipData.splice(chipToDelete, 1);
          return {
            chipData: chipData
          };
        });
      };
    };

    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Chips, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.state.chipData.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: data.key,
          label: data.label,
          onDelete: _this2.handleDelete(data),
          className: classes.chip,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      }));
    }
  }]);

  return Chips;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Chips.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles)(Chips));

/***/ }),

/***/ "./src/components/CustomizedNotification.js":
/*!**************************************************!*\
  !*** ./src/components/CustomizedNotification.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/colors/amber */ "./node_modules/@material-ui/core/colors/amber.js");
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/SnackbarContent/index.js");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__);






var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/CustomizedNotification.js";















var variantIcon = {
  success: _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_10___default.a,
  warning: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_19___default.a,
  error: _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11___default.a,
  info: _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_12___default.a
};

var styles1 = function styles1(theme) {
  return {
    success: {
      backgroundColor: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_14___default.a[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_15___default.a[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

function MySnackbarContent(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_18___default.a, Object.assign({
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      id: "client-snackbar",
      className: classes.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.icon, classes.iconVariant),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), message),
    action: [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }))]
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
}

MySnackbarContent.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['success', 'warning', 'error', 'info']).isRequired
};
var MySnackbarContentWrapper = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["withStyles"])(styles1)(MySnackbarContent);

var styles2 = function styles2(theme) {
  return {
    margin: {
      margin: theme.spacing.unit
    }
  };
};

var CustomizedNotification =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomizedNotification, _React$Component);

  function CustomizedNotification() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomizedNotification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomizedNotification)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false
    };

    _this.open = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleClose = function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        open: false
      });
    };

    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomizedNotification, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_17___default.a, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: this.state.open,
        autoHideDuration: 3000,
        style: {
          marginTop: 70
        },
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MySnackbarContentWrapper, {
        onClose: this.handleClose,
        variant: this.props.variant,
        message: this.props.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })));
    }
  }]);

  return CustomizedNotification;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CustomizedNotification.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["withStyles"])(styles2)(CustomizedNotification));

/***/ }),

/***/ "./src/components/Notification.js":
/*!****************************************!*\
  !*** ./src/components/Notification.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/Notification.js";








var styles = function styles(theme) {
  return {
    close: {
      padding: theme.spacing.unit / 2
    }
  };
};

var Notification =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Notification, _React$Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false
    };

    _this.handleClose = function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        open: false
      });
    };

    _this.open = function () {
      _this.setState({
        open: true
      });
    };

    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Notification, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        style: {
          marginBottom: 50,
          backgroundColor: 'green'
        },
        open: this.state.open,
        autoHideDuration: 222000,
        onClose: this.handleClose,
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, this.props.message),
        action: [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }))],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Notification.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Notification));

/***/ }),

/***/ "./src/components/OrderCard.js":
/*!*************************************!*\
  !*** ./src/components/OrderCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Restaurant */ "./node_modules/@material-ui/icons/Restaurant.js");
/* harmony import */ var _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/LocalDrink */ "./node_modules/@material-ui/icons/LocalDrink.js");
/* harmony import */ var _material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/LocalBar */ "./node_modules/@material-ui/icons/LocalBar.js");
/* harmony import */ var _material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalBar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/OrderCard.js";
















var styles = {
  card: {
    maxWidth: 275,
    maxHeight: 410,
    margin: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    margin: 20
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  blackAvatar: {
    color: '#fff',
    backgroundColor: 'black'
  }
};

var OrderCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OrderCard, _Component);

  function OrderCard(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrderCard);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OrderCard).call(this, props));
    var order = _this.props.order;
    _this.state = {
      order: order,
      status: order.orderStatus
    };
    console.log(order);
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrderCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          order = _this$props.order;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "headline",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Order Number : ", order.orderId), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "subtitle2",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Order Status : ", this.state.status.desc), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, order.orderItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_16___default.a, {
          className: classes.blackAvatar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, item.PRODUCT_MENU_TYPE == 'MT_DRINK' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_18___default.a, {
          color: 'primary',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_17___default.a, {
          color: 'primary',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
          primary: item.PRODUCT_NAME,
          secondary: "x ".concat(item.QUANTITY),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "caption",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Total Price : \xA3 ", order.totalPrice.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.props.onOrderConfirm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Confirm order"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Decline order")));
    }
  }]);

  return OrderCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

OrderCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(OrderCard));

/***/ }),

/***/ "./src/components/RestaurantCard.js":
/*!******************************************!*\
  !*** ./src/components/RestaurantCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/RestaurantCard.js";









var styles = {
  card: {
    maxWidth: 275,
    minWidth: 255,
    margin: 10
  },
  button: {
    margin: 15
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  delete: {
    position: 'relative',
    fontSize: 35,
    color: 'red',
    cursor: 'pointer'
  },
  deleteContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

var RestaurantCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RestaurantCard, _Component);

  function RestaurantCard(props) {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RestaurantCard);

    return Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RestaurantCard).call(this, props));
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RestaurantCard, [{
    key: "render",
    value: function render() {
      var _this = this;

      var classes = this.props.classes;
      var restaurant = this.props.restaurant;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classes.deleteContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default.a, {
        color: 'primary',
        className: classes.delete,
        onClick: this.props.onDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "headline",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, restaurant.RESTAURANT_NAME), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "subtitle1",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, restaurant.RESTAURANT_STREET, " ", restaurant.RESTAURANT_POSTCODE), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "subtitle1",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, restaurant.RESTAURANT_CITY), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "subtitle2",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Tables : ", restaurant.RESTAURANT_TABLE_COUNT), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "subtitle2",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Pre-book enabled : ", restaurant.RESTAURANT_PRE_BOOK == 1 ? "Yes" : "No")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "restaurantCardButtonContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        size: "small",
        className: classes.button,
        onClick: function onClick() {
          _this.props.router.push('/viewMenu', {
            restaurantId: restaurant.RESTAURANT_ID
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Menu"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        size: "small",
        className: classes.button,
        onClick: function onClick() {
          _this.props.router.push('/setRestaurant', {
            restaurant: restaurant
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Edit restaurant details"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        size: "small",
        className: classes.button,
        onClick: function onClick() {
          _this.props.router.push('/setOpeningTimes', {
            restaurantId: restaurant.RESTAURANT_ID
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Set opening times"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        size: "small",
        className: classes.button,
        onClick: function onClick() {
          _this.props.router.push('/viewOrders', {
            restaurantId: restaurant.RESTAURANT_ID
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "View all current orders"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        size: "small",
        className: classes.button,
        onClick: function onClick() {
          _this.props.router.push('/addPhotos', {
            restaurantId: restaurant.RESTAURANT_ID
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Add Photos")));
    }
  }]);

  return RestaurantCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

RestaurantCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(RestaurantCard));

/***/ }),

/***/ "./src/components/TopBar.js":
/*!**********************************!*\
  !*** ./src/components/TopBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/Menu/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AppContext */ "./src/components/AppContext.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Utils */ "./src/components/Utils.js");






var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/components/TopBar.js";















var styles = function styles(theme) {
  return {
    root: {
      width: '100%'
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: 200
    }),
    sectionDesktop: Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      margin: theme.spacing.unit
    }
  };
};

var TopBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TopBar, _React$Component);

  function TopBar(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopBar);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TopBar).call(this, props));

    _this.handleProfileMenuOpen = function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    };

    _this.handleMenuClose = function () {
      _this.setState({
        anchorEl: null
      });
    };

    _this.signOut = function () {
      localStorage.removeItem('foodApp');
      _Utils__WEBPACK_IMPORTED_MODULE_19__["default"].getData('http://localhost:3001/signOut').then(function (res) {
        if (res.status == 'success') {
          _Utils__WEBPACK_IMPORTED_MODULE_19__["default"].navigate('/login');
        }
      });
    };

    _this.state = {
      anchorEl: null,
      isAuthenticated: false
    };
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _Utils__WEBPACK_IMPORTED_MODULE_19__["default"].isAuthenticated().then(function (isAuthenticated) {
        _this2.setState({
          isAuthenticated: isAuthenticated
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var anchorEl = this.state.anchorEl;
      var isMenuOpen = Boolean(anchorEl);
      var classes = this.props.classes;
      var authenticatedUser = JSON.parse(localStorage.getItem('foodApp')).authenticatedUser;
      var renderDropdownMenu = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: isMenuOpen,
        onClose: this.handleMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onClick: this.handleMenuClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, " My Profile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onClick: function onClick() {
          _Utils__WEBPACK_IMPORTED_MODULE_19__["default"].navigate('/restaurants');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, " My Restaurants"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onClick: this.signOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Sign out"));
      var renderLoggedOptions = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.title,
        variant: "subtitle1",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, authenticatedUser.firstName, " ", authenticatedUser.lastName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.sectionDesktop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        "aria-owns": isMenuOpen ? 'material-appbar' : undefined,
        "aria-haspopup": "true",
        onClick: this.handleProfileMenuOpen,
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))));
      var renderLoggedOutOptions = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default.a, {
        variant: "contained",
        color: "primary",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Link"],
        to: "/",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Sign in"));
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
        position: "static",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.title,
        variant: "h6",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Welcome"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), this.state.isAuthenticated ? renderLoggedOptions : renderLoggedOutOptions)), renderDropdownMenu);
    }
  }]);

  return TopBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

TopBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(TopBar));

/***/ }),

/***/ "./src/components/Utils.js":
/*!*********************************!*\
  !*** ./src/components/Utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppContext */ "./src/components/AppContext.js");





var Utills =
/*#__PURE__*/
function () {
  function Utills() {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Utills);

    this.navigate = function (url) {
      window.location.href = url;
    };

    this.endPoint = 'http://localhost:3001';
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Utills, [{
    key: "startLoading",
    value: function startLoading() {
      return true;
    }
  }, {
    key: "stopLoading",
    value: function stopLoading() {
      return false;
    }
  }, {
    key: "toTimestamp",
    value: function toTimestamp(strDate) {
      var datum = Date.parse(strDate);
      return datum / 1000;
    }
  }, {
    key: "postData",
    value: function postData(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'POST',
          headers: new Headers({
            'content-type': 'application/json'
          }),
          credentials: 'include',
          body: JSON.stringify(data)
        }).then(function (res) {
          console.log(res);
          return res.json();
        }).then(function (data) {
          resolve(data);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "getData",
    value: function getData(url) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'GET',
          headers: new Headers({
            'content-type': 'application/json'
          }),
          credentials: 'include'
        }).then(function (res) {
          console.log(res);
          return res.json();
        }).then(function (data) {
          resolve(data);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.getData("".concat(_this.endPoint, "/checkAuthentication")).then(function (data) {
          if (data.status == 'authenticated') {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    }
  }]);

  return Utills;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Utills());

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/screens/AddMenu.js":
/*!********************************!*\
  !*** ./src/screens/AddMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AddMenuItemColumn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AddMenuItemColumn */ "./src/components/AddMenuItemColumn.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/AddMenu.js";









var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 25,
      marginBottom: 0
    },
    column: {
      flexDirection: 'column'
    }
  };
};

var AddMenu =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddMenu, _Component);

  function AddMenu(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddMenu);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddMenu).call(this, props));

    _this.addMenuRow = function () {
      var ref = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
      var row = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AddMenuItemColumn__WEBPACK_IMPORTED_MODULE_11__["default"], {
        innerRef: ref
      });
      var rows = _this.state.rows;
      rows.push(row);

      _this.setState({
        rows: rows
      });

      _this.inputRefs[_this.refsCounter++] = ref;
    };

    _this.addToMenu = function () {
      var data = {
        "menuItems": [],
        "restaurantId": _this.props.history.location.state.restaurantId
      };
      var i = 0;

      _this.state.rows.map(function (row, index) {
        var inputRef = _this.inputRefs[index];

        if (inputRef) {
          data.menuItems.push(inputRef.current.state);
        }
      });

      if (data.menuItems.length) {
        _components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].endPoint, "/addToMenu"), data).then(function (res) {}).catch(function (err) {
          alert(err);
        });
      }
    };

    _this.state = {
      rows: []
    };
    _this.refsCounter = 0;
    _this.inputRefs = {};
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddMenu, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        className: classes.column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
        elevation: 3,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onClick: this.addMenuRow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), this.state.rows.map(function (row, index) {
        return row;
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.addToMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Add food items to menu"));
    }
  }]);

  return AddMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

AddMenu.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(AddMenu));

/***/ }),

/***/ "./src/screens/AddPhotos.js":
/*!**********************************!*\
  !*** ./src/screens/AddPhotos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/GridList/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/GridListTileBar/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '/img/bg.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/AddPhotos.js";












var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    }
  };
};

var AddPhotos =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddPhotos, _Component);

  function AddPhotos(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddPhotos);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddPhotos).call(this, props));
    _this.state = {
      pictures: [{
        img: __webpack_require__(/*! ../assets/img/restaurant_example.jpeg */ "./src/assets/img/restaurant_example.jpeg"),
        title: 'Image',
        author: 'author'
      }, {
        img: __webpack_require__(/*! ../assets/img/restaurant_example1.jpg */ "./src/assets/img/restaurant_example1.jpg"),
        title: 'Image',
        author: 'author'
      }]
    };
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddPhotos, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var pictures = this.state.pictures;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14___default.a, {
        elevation: 3,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_8___default.a, {
        cellHeight: 180,
        className: classes.gridList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_9___default.a, {
        key: "Subheader",
        cols: 2,
        style: {
          height: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default.a, {
        component: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "December")), pictures.map(function (tile) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: tile.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: tile.img,
          alt: tile.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
          title: tile.title,
          subtitle: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, "by: ", tile.author),
          actionIcon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_13___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          })),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }));
      })))));
    }
  }]);

  return AddPhotos;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

AddPhotos.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(AddPhotos));

/***/ }),

/***/ "./src/screens/EditRestaurant.js":
/*!***************************************!*\
  !*** ./src/screens/EditRestaurant.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AddMenuItemColumn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AddMenuItemColumn */ "./src/components/AddMenuItemColumn.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/EditRestaurant.js";









var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 25,
      marginBottom: 0
    },
    column: {
      flexDirection: 'column'
    }
  };
};

var EditRestaurant =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EditRestaurant, _Component);

  function EditRestaurant(props) {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditRestaurant);

    return Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EditRestaurant).call(this, props));
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditRestaurant, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        className: classes.column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "edit res");
    }
  }]);

  return EditRestaurant;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

EditRestaurant.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(EditRestaurant));

/***/ }),

/***/ "./src/screens/Home.js":
/*!*****************************!*\
  !*** ./src/screens/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppContext */ "./src/components/AppContext.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar/Toolbar */ "./node_modules/@material-ui/core/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/Home.js";













var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      height: 300
    },
    input: {
      margin: theme.spacing.unit,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 10
    },
    registerLink: {
      fontSize: 14,
      marginTop: 'auto'
    }
  };
};

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home(props) {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var authenitcatedUser = JSON.parse(localStorage.getItem('foodApp')).authenticatedUser;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
        elevation: 3,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Welcome ", authenitcatedUser.firstName)));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Home.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Home));

/***/ }),

/***/ "./src/screens/Login.js":
/*!******************************!*\
  !*** ./src/screens/Login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _components_CustomizedNotification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CustomizedNotification */ "./src/components/CustomizedNotification.js");





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/Login.js";











var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      height: 300
    },
    input: {
      margin: theme.spacing.unit,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 10
    },
    registerLink: {
      fontSize: 14,
      marginTop: 'auto'
    },
    loggedInfo: {
      fontSize: 14,
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  };
};

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).call(this, props));

    _this.login = function () {
      _components_Utils__WEBPACK_IMPORTED_MODULE_13__["default"].postData('http://localhost:3001/login', _this.state).then(function (data) {
        if (data.status == 'success') {
          localStorage.setItem('foodApp', JSON.stringify({
            'authenticatedUser': data.authenticatedUser
          }));
          document.cookie = 'authentication=' + JSON.stringify({
            sessionId: data.sessionId,
            userId: data.authenticatedUser.id
          });
          _components_Utils__WEBPACK_IMPORTED_MODULE_13__["default"].navigate('/');
        } else {
          _this.notificationRef.current.open();
        }
      });
    };

    _this.state = {
      emailAddress: '',
      password: '',
      isAuthenticated: false
    };
    _this.notificationRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _components_Utils__WEBPACK_IMPORTED_MODULE_13__["default"].isAuthenticated().then(function (isAuthenticated) {
        _this2.setState({
          isAuthenticated: isAuthenticated
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var renderLoginPage = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
        elevation: 3,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "email-addr-input",
        label: "Email Address",
        className: classes.input,
        value: this.state.emailAddress,
        onChange: function onChange(e) {
          _this3.setState({
            'emailAddress': e.target.value
          });
        },
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "pass-input",
        label: "Password",
        className: classes.input,
        value: this.state.password,
        type: "password",
        margin: "normal",
        onChange: function onChange(e) {
          _this3.setState({
            'password': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "subtitle1",
        className: classes.registerLink,
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Do not have an account? Create one ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        to: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "here")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Login"));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.state.isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
        elevation: 3,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "subtitle1",
        className: classes.loggedInfo,
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "You are already logged in, log out first to login again")) : renderLoginPage, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CustomizedNotification__WEBPACK_IMPORTED_MODULE_14__["default"], {
        innerRef: this.notificationRef,
        variant: 'error',
        message: 'Incorrect password or email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Login.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Login));

/***/ }),

/***/ "./src/screens/Register.js":
/*!*********************************!*\
  !*** ./src/screens/Register.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppContext */ "./src/components/AppContext.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar/Toolbar */ "./node_modules/@material-ui/core/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/Register.js";













var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      height: 500
    },
    inputCenter: {
      margin: theme.spacing.unit,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '70%'
    },
    input: {
      margin: theme.spacing.unit,
      width: '70%'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 10
    }
  };
};

var Register =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Register, _Component);

  function Register(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Register);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Register).call(this, props));

    _this.register = function () {
      _components_Utils__WEBPACK_IMPORTED_MODULE_16__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_16__["default"].endPoint, "/register"), _this.state).then(function (data) {
        _this.props.history.push('/login');
      }).catch(function (err) {
        console.log(err);
        alert(err);
      });
    };

    _this.state = {
      emailAddress: '',
      password: '',
      repassword: '',
      firstName: '',
      lastName: '',
      phone: ''
    };
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Register, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AppContext__WEBPACK_IMPORTED_MODULE_12__["default"].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
          elevation: 3,
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
          variant: "title",
          color: "inherit",
          noWrap: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "firstName-input",
          label: "First Name",
          className: classes.input,
          value: _this2.state.firstName,
          type: "text",
          margin: "normal",
          onChange: function onChange(e) {
            _this2.setState({
              'firstName': e.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "lastName-input",
          label: "Last name",
          className: classes.input,
          value: _this2.state.lastName,
          type: "text",
          margin: "normal",
          onChange: function onChange(e) {
            _this2.setState({
              'lastName': e.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "phone-input",
          label: "Phone",
          className: classes.inputCenter,
          value: _this2.state.phone,
          type: "text",
          margin: "normal",
          onChange: function onChange(e) {
            _this2.setState({
              'phone': e.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "email-addr-input",
          label: "Email Address",
          className: classes.inputCenter,
          value: _this2.state.emailAddress,
          onChange: function onChange(e) {
            _this2.setState({
              'emailAddress': e.target.value
            });
          },
          margin: "normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "pass-input",
          label: "Password",
          className: classes.inputCenter,
          value: _this2.state.password,
          type: "password",
          margin: "normal",
          onChange: function onChange(e) {
            _this2.setState({
              'password': e.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "repass-input",
          label: "Repeat password",
          className: classes.inputCenter,
          value: _this2.state.repassword,
          type: "password",
          margin: "normal",
          onChange: function onChange(e) {
            _this2.setState({
              'repassword': e.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
          variant: "contained",
          color: "primary",
          className: classes.button,
          onClick: _this2.register,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "Register")));
      });
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Register.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Register));

/***/ }),

/***/ "./src/screens/Restaurants.js":
/*!************************************!*\
  !*** ./src/screens/Restaurants.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CircularProgress_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core_CircularProgress_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_RestaurantCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/RestaurantCard */ "./src/components/RestaurantCard.js");
/* harmony import */ var _components_AlertDialogSlide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AlertDialogSlide */ "./src/components/AlertDialogSlide.js");





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/Restaurants.js";











var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      height: '80%'
    },
    rootInitial: {
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      height: '15%',
      borderRadius: 25
    },
    addButton: {
      height: '80',
      fontSize: 'larger'
    },
    btnContainer: {
      marginTop: 'auto',
      marginBottom: 20
    },
    column: {
      flexDirection: 'column'
    }
  };
};

var Restaurants =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Restaurants, _Component);

  function Restaurants(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Restaurants);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Restaurants).call(this, props));
    _this.state = {
      restaurants: [],
      loading: true,
      toDelete: ""
    };
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Restaurants, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].getData('http://localhost:3001/myRestaurants').then(function (data) {
        //check status later
        _this2.setState({
          restaurants: data.restaurantsData,
          loading: false
        });
      });
    }
  }, {
    key: "deleteRestaurant",
    value: function deleteRestaurant() {
      var _this3 = this;

      var toDelete = this.state.toDelete;
      _components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].endPoint, "/deleteRestaurant"), {
        restaurantId: toDelete.RESTAURANT_ID
      }).then(function (res) {
        _this3.setState({
          toDelete: ""
        });

        var index = _this3.state.restaurants.indexOf(toDelete);

        console.log(index);

        if (index != null) {
          _this3.state.restaurants.splice(index, 1);

          _this3.setState({
            restaurants: _this3.state.restaurants
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var classes = this.props.classes;
      var renderOwnedRestaurants = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "restaurantCardContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.restaurants.map(function (restaurant) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_RestaurantCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
          router: _this4.props.history,
          restaurant: restaurant,
          key: restaurant.RESTAURANT_ID,
          onDelete: function onDelete() {
            _this4.setState({
              toDelete: restaurant
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        });
      }));
      var renderNoRestaurantWindow = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
        elevation: 3,
        className: classes.rootInitial,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Seems like you do not own any restaurants yet."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classes.btnContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.addButton,
        onClick: function onClick() {
          _this4.props.history.push('/setRestaurant');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Add a restaurant")));
      var progressBar = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CircularProgress_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "primary",
        size: 150,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        className: classes.column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AlertDialogSlide__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "confirm deletion",
        message: "Are you sure you want to delete restaurant : ".concat(this.state.toDelete.RESTAURANT_NAME),
        handleYes: function handleYes() {
          _this4.deleteRestaurant();
        },
        open: this.state.toDelete ? true : false,
        handleNo: function handleNo() {
          _this4.setState({
            toDelete: ""
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), this.state.restaurants.length ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.addButton,
        onClick: function onClick() {
          _this4.props.history.push('/setRestaurant');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Add a restaurant")) : "", this.state.loading ? progressBar : this.state.restaurants.length ? renderOwnedRestaurants : renderNoRestaurantWindow);
    }
  }]);

  return Restaurants;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Restaurants.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Restaurants));

/***/ }),

/***/ "./src/screens/SetOpeningTimes.js":
/*!****************************************!*\
  !*** ./src/screens/SetOpeningTimes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AddMenuItemColumn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AddMenuItemColumn */ "./src/components/AddMenuItemColumn.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/SetOpeningTimes.js";









var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 25,
      marginBottom: 0
    },
    column: {
      flexDirection: 'column'
    }
  };
};

var SetOpeningTimes =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SetOpeningTimes, _Component);

  function SetOpeningTimes(props) {
    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SetOpeningTimes);

    return Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SetOpeningTimes).call(this, props));
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SetOpeningTimes, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        className: classes.column,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "time");
    }
  }]);

  return SetOpeningTimes;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

SetOpeningTimes.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(SetOpeningTimes));

/***/ }),

/***/ "./src/screens/SetRestaurant.js":
/*!**************************************!*\
  !*** ./src/screens/SetRestaurant.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var material_ui_time_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! material-ui-time-picker */ "./node_modules/material-ui-time-picker/lib/index.js");
/* harmony import */ var material_ui_time_picker__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(material_ui_time_picker__WEBPACK_IMPORTED_MODULE_17__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/SetRestaurant.js";














var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputCenter: {
      margin: theme.spacing.unit,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '70%'
    },
    input: {
      margin: theme.spacing.unit,
      width: '70%'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 15,
      marginTop: 'auto'
    },
    grid: {
      width: '60%'
    }
  };
};

var SetRestaurant =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SetRestaurant, _Component);

  function SetRestaurant(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SetRestaurant);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SetRestaurant).call(this, props));

    _this.addRestaurant = function () {
      _components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].endPoint, "/addRestaurant"), _this.state).then(function (res) {
        if (res.status == 'success') {
          _this.props.history.push('/restaurants');
        } else {
          alert(res);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.editRestaurant = function () {
      _components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_8__["default"].endPoint, "/editRestaurant"), _this.state).then(function (res) {
        if (res.status == 'success') {
          _this.props.history.push('/restaurants');
        } else {
          alert(res);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.restaurant = null;

    if (_this.props.history.location.state) {
      _this.restaurant = _this.props.history.location.state.restaurant;
    }

    if (_this.restaurant) {
      _this.state = {
        restaurantId: _this.restaurant.RESTAURANT_ID,
        restaurantName: _this.restaurant.RESTAURANT_NAME,
        restaurantTableCount: _this.restaurant.RESTAURANT_TABLE_COUNT,
        allowPreBook: _this.restaurant.RESTAURANT_PRE_BOOK,
        street: _this.restaurant.RESTAURANT_STREET,
        city: _this.restaurant.RESTAURANT_CITY,
        postalCode: _this.restaurant.RESTAURANT_POSTCODE
      };
    } else {
      _this.state = {
        restaurantName: '',
        restaurantTableCount: '',
        allowPreBook: false,
        street: '',
        city: '',
        postalCode: ''
      };
    }

    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SetRestaurant, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
        elevation: 3,
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, this.restaurant ? "Edit ".concat(this.restaurant.RESTAURANT_NAME) : 'Register your restaurant'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "restaurant-name",
        label: "Restaurant name",
        className: classes.inputCenter,
        value: this.state.restaurantName,
        type: "text",
        margin: "normal",
        onChange: function onChange(e) {
          _this2.setState({
            'restaurantName': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "restaurant-table-count",
        label: "Table count",
        className: classes.input,
        value: this.state.restaurantTableCount,
        type: "number",
        margin: "normal",
        onChange: function onChange(e) {
          _this2.setState({
            'restaurantTableCount': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "restaurant-street",
        label: "Street",
        className: classes.input,
        value: this.state.street,
        type: "text",
        margin: "normal",
        onChange: function onChange(e) {
          _this2.setState({
            'street': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "restaurant-postCode",
        label: "Postal Code",
        className: classes.inputCenter,
        value: this.state.postalCode,
        type: "text",
        margin: "normal",
        onChange: function onChange(e) {
          _this2.setState({
            'postalCode': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "restaurant-city",
        label: "City",
        className: classes.input,
        value: this.state.city,
        type: "text",
        margin: "normal",
        onChange: function onChange(e) {
          _this2.setState({
            'city': e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15___default.a, {
          checked: this.state.allowPreBook,
          onChange: function onChange(e) {
            _this2.setState({
              'allowPreBook': !_this2.state.allowPreBook
            });
          },
          value: this.state.allowPreBook,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }),
        label: "Allow Pre-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      })), !this.restaurant && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.addRestaurant,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Create"), this.restaurant && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "contained",
        color: "primary",
        className: classes.button,
        onClick: this.editRestaurant,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Edit")));
    }
  }]);

  return SetRestaurant;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

SetRestaurant.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(SetRestaurant));

/***/ }),

/***/ "./src/screens/ViewMenu.js":
/*!*********************************!*\
  !*** ./src/screens/ViewMenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_AddMenuItemColumn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AddMenuItemColumn */ "./src/components/AddMenuItemColumn.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Restaurant */ "./node_modules/@material-ui/icons/Restaurant.js");
/* harmony import */ var _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/LocalDrink */ "./node_modules/@material-ui/icons/LocalDrink.js");
/* harmony import */ var _material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/BeachAccess */ "./node_modules/@material-ui/icons/BeachAccess.js");
/* harmony import */ var _material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_CardContent_CardContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/CardContent/CardContent */ "./node_modules/@material-ui/core/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_CardContent_CardContent__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent_CardContent__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/TextField/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _material_ui_core_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/core/MenuItem/MenuItem */ "./node_modules/@material-ui/core/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _material_ui_core_Card_Card__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/core/Card/Card */ "./node_modules/@material-ui/core/Card/Card.js");
/* harmony import */ var _material_ui_core_Card_Card__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card_Card__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../components/Notification */ "./src/components/Notification.js");
/* harmony import */ var _components_CustomizedNotification__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../components/CustomizedNotification */ "./src/components/CustomizedNotification.js");
/* harmony import */ var _components_Chips__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../components/Chips */ "./src/components/Chips.js");






var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/ViewMenu.js";








































var styles = function styles(theme) {
  return {
    categories: {
      display: 'flex',
      flexDirection: 'column',
      width: '25%',
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      height: '100%'
    },
    root: {
      margin: 15,
      marginTop: theme.spacing.unit * 3
    },
    rootMain: {
      margin: 15
    },
    table: {
      minWidth: 1020
    },
    tableWrapper: {
      overflowX: 'auto'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 25,
      marginBottom: 0
    },
    row: {
      flexDirection: 'row'
    }
  };
};

var foodTypes = [{
  value: '',
  label: 'All categories',
  icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })
}, {
  value: 'MT_STARTER',
  label: 'Starters',
  icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })
}, {
  value: 'MT_MAIN',
  label: 'Mains',
  icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })
}, {
  value: 'MT_DSRT',
  label: 'Desserts',
  icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })
}, {
  value: 'MT_SNK',
  label: 'Snacks',
  icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })
}, {
  value: 'MT_DRINK',
  label: 'Drinks',
  icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_LocalDrink__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  })
}];
var counter = 0;

function createData(name, desc, price, cat, dbId) {
  counter += 1;
  return {
    id: counter,
    PRODUCT_NAME: name,
    PRODUCT_DESCRIPTION: desc,
    PRODUCT_PRICE: price,
    PRODUCT_MENU_TYPE: cat,
    PRODUCT_ID: dbId
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

var rows = [{
  id: 'name',
  numeric: false,
  disablePadding: true,
  label: 'Product Name'
}, {
  id: 'desc',
  numeric: false,
  disablePadding: false,
  label: 'Product Description'
}, {
  id: 'price',
  numeric: false,
  disablePadding: false,
  label: 'Product Price (£)'
}, {
  id: 'cat',
  numeric: false,
  disablePadding: false,
  label: 'Product Category'
}, {
  id: 'alg',
  numeric: false,
  disablePadding: false,
  label: 'Product Allergies'
}];

var EnhancedTableHead =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EnhancedTableHead, _React$Component);

  function EnhancedTableHead() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EnhancedTableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(EnhancedTableHead)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.createSortHandler = function (property) {
      return function (event) {
        _this.props.onRequestSort(event, property);
      };
    };

    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EnhancedTableHead, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onSelectAllClick = _this$props.onSelectAllClick,
          order = _this$props.order,
          orderBy = _this$props.orderBy,
          numSelected = _this$props.numSelected,
          rowCount = _this$props.rowCount;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_28___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_30___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
        padding: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_33___default.a, {
        indeterminate: numSelected > 0 && numSelected < rowCount,
        checked: numSelected === rowCount,
        onChange: onSelectAllClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), rows.map(function (row) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          key: row.id,
          align: row.numeric ? 'right' : 'left',
          padding: row.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === row.id ? order : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_35___default.a, {
          title: "Sort",
          placement: row.numeric ? 'bottom-end' : 'bottom-start',
          enterDelay: 300,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_31___default.a, {
          active: orderBy === row.id,
          direction: order,
          onClick: _this2.createSortHandler(row.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, row.label)));
      }, this)));
    }
  }]);

  return EnhancedTableHead;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

EnhancedTableHead.propTypes = {
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onSelectAllClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired
};

var toolbarStyles = function toolbarStyles(theme) {
  return {
    root: {
      paddingRight: theme.spacing.unit
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_38__["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 100%'
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: '0 0 auto'
    }
  };
};

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var numSelected = props.numSelected,
      classes = props.classes,
      selectedCategory = props.selectedCategory,
      onAddPress = props.onAddPress,
      onDelete = props.onDelete;
  console.log(selectedCategory);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_32___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(classes.root, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.highlight, numSelected > 0)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, numSelected > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
    color: "inherit",
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, numSelected, " selected") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
    variant: "h6",
    id: "tableTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, selectedCategory.label)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: classes.spacer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: classes.actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_35___default.a, {
    title: "Add row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_34___default.a, {
    "aria-label": "Add",
    onClick: onAddPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }))), numSelected > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_35___default.a, {
    title: "Delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_34___default.a, {
    "aria-label": "Delete",
    onClick: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_36___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }))) : '')));
};

EnhancedTableToolbar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,
  selectedCategory: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
EnhancedTableToolbar = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(toolbarStyles)(EnhancedTableToolbar);

var ViewMenu =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ViewMenu, _Component);

  function ViewMenu(props) {
    var _this3;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ViewMenu);

    _this3 = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewMenu).call(this, props));

    _this3.handleRequestSort = function (event, property) {
      var orderBy = property;
      var order = 'desc';

      if (_this3.state.orderBy === property && _this3.state.order === 'desc') {
        order = 'asc';
      }

      _this3.setState({
        order: order,
        orderBy: orderBy
      });
    };

    _this3.handleSelectAllClick = function (event) {
      if (event.target.checked) {
        _this3.setState(function (state) {
          return {
            selected: state.data.map(function (n) {
              return n.id;
            })
          };
        });

        return;
      }

      _this3.setState({
        selected: []
      });
    };

    _this3.handleClick = function (event, id) {
      var selected = _this3.state.selected;
      var selectedIndex = selected.indexOf(id);
      var newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }

      _this3.setState({
        selected: newSelected
      });
    };

    _this3.handleEdit = function (e, id, col) {
      var data = _this3.state.data;
      var newRecord;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.id == id) {
            newRecord = i;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      newRecord[col] = e.target.value;

      _this3.setState({
        data: data
      });
    };

    _this3.handleChangePage = function (event, page) {
      _this3.setState({
        page: page
      });
    };

    _this3.handleChangeRowsPerPage = function (event) {
      _this3.setState({
        rowsPerPage: event.target.value
      });
    };

    _this3.addRow = function () {
      var selectedCategory = _this3.state.selectedCategory.value ? _this3.state.selectedCategory.value : "MT_STARTER";
      var newRow = createData('', '', '', selectedCategory, null);
      var newData = _this3.state.data;
      var lastPage = parseInt(_this3.state.data.length / _this3.state.rowsPerPage);
      var data = {
        menuItem: newRow,
        restaurantId: _this3.props.history.location.state.restaurantId
      };
      _components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].endPoint, "/addProduct"), data).then(function (res) {
        if (res.status === 'success') {
          newRow.PRODUCT_ID = res.PRODUCT_ID;
          newData.push(newRow);

          _this3.setState({
            status: {
              type: 'success',
              message: 'Product Added'
            },
            data: newData
          });

          _this3.notificationRef.current.open();
        }
      });
    };

    _this3.onDelete = function () {
      var selected = _this3.state.selected;
      console.log(selected);
      console.log(_this3.state.data);
      var toDelete = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = selected[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _this3.state.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var j = _step3.value;

              if (i == j.id) {
                toDelete.push(j.PRODUCT_ID);
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      _components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].endPoint, "/deleteMenuItems"), toDelete).then(function (res) {
        if (res.status === 'success') {
          _this3.setState({
            status: {
              type: 'success',
              message: 'deleted!'
            }
          });

          _this3.notificationRef.current.open();

          if (!_this3.state.selectedCategory.value) {
            _this3.showAllMenuItems();
          } else {
            _this3.showByCategory(_this3.state.selectedCategory);
          }
        }
      });
    };

    _this3.saveMenu = function () {
      var data = {
        menuItems: _this3.state.data,
        restaurantId: _this3.props.history.location.state.restaurantId
      };
      _components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].postData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].endPoint, "/saveMenu"), data).then(function (res) {
        if (res.status === 'success') {
          _this3.setState({
            status: {
              type: 'success',
              message: 'Menu saved!'
            }
          });

          _this3.notificationRef.current.open();
        }
      });
    };

    _this3.isSelected = function (id) {
      return _this3.state.selected.indexOf(id) !== -1;
    };

    _this3.state = {
      data: [],
      "restaurantId": _this3.props.history.location.state.restaurantId,
      order: 'asc',
      orderBy: 'Product Name',
      selected: [],
      page: 0,
      rowsPerPage: 5,
      selectedCategory: {
        value: '',
        label: ''
      },
      status: {
        message: 'Product Added',
        type: 'success'
      }
    };
    _this3.notificationRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();

    _this3.showAllMenuItems();

    return _this3;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ViewMenu, [{
    key: "showByCategory",
    value: function showByCategory(type) {
      var _this4 = this;

      var records = [];

      if (type.value != '') {
        _components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].getData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].endPoint, "/getFoodByCategory?restaurantId=").concat(this.state.restaurantId, "&foodCategory=").concat(type.value)).then(function (res) {
          res.menuItems.map(function (item) {
            records.push(createData(item.PRODUCT_NAME, item.PRODUCT_DESCRIPTION, item.PRODUCT_PRICE, item.PRODUCT_MENU_TYPE, item.PRODUCT_ID, false));
          });

          _this4.setState({
            data: records,
            selectedCategory: type,
            selected: []
          });

          console.log(_this4.state);
        });
      } else {
        this.showAllMenuItems();
      }
    }
  }, {
    key: "showAllMenuItems",
    value: function showAllMenuItems() {
      var _this5 = this;

      var selectedCategory = {
        value: '',
        label: 'All categories'
      };
      var records = [];
      _components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].getData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["default"].endPoint, "/getAllMenuItems?restaurantId=").concat(this.state.restaurantId)).then(function (res) {
        res.menuItems.map(function (item) {
          records.push(createData(item.PRODUCT_NAME, item.PRODUCT_DESCRIPTION, item.PRODUCT_PRICE, item.PRODUCT_MENU_TYPE, item.PRODUCT_ID, false));
        });

        _this5.setState({
          data: records,
          selectedCategory: selectedCategory,
          selected: []
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          data = _this$state.data,
          order = _this$state.order,
          orderBy = _this$state.orderBy,
          selected = _this$state.selected,
          rowsPerPage = _this$state.rowsPerPage,
          page = _this$state.page;
      var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "content",
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.categories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
        variant: "subheading",
        component: "h2",
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, "Show by category"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        elevation: 3,
        className: classes.root,
        style: {
          margin: 15
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, foodTypes.map(function (type) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
          button: true,
          onClick: function onClick() {
            _this6.showByCategory(type);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 522
          },
          __self: this
        }, type.icon), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
          primary: type.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525
          },
          __self: this
        })));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
        variant: "contained",
        color: "primary",
        size: 'large',
        className: classes.button,
        onClick: this.saveMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "Save changes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.rootMain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(EnhancedTableToolbar, {
        numSelected: selected.length,
        selectedCategory: this.state.selectedCategory,
        onAddPress: this.addRow,
        onDelete: this.onDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes.tableWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_25___default.a, {
        className: classes.table,
        "aria-labelledby": "tableTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(EnhancedTableHead, {
        numSelected: selected.length,
        order: order,
        orderBy: orderBy,
        onSelectAllClick: this.handleSelectAllClick,
        onRequestSort: this.handleRequestSort,
        rowCount: data.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_26___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, stableSort(data, getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (n) {
        var isSelected = _this6.isSelected(n.id);

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_30___default.a, {
          hover: true,
          role: "checkbox",
          "aria-checked": isSelected,
          tabIndex: -1,
          key: n.id,
          selected: isSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          padding: "checkbox",
          onClick: function onClick(event) {
            return _this6.handleClick(event, n.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_33___default.a, {
          checked: isSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          component: "th",
          scope: "row",
          padding: "none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39___default.a, {
          required: true,
          value: n.PRODUCT_NAME,
          id: n.id,
          className: classes.textField,
          margin: "normal",
          onChange: function onChange(e) {
            _this6.handleEdit(e, n.id, 'PRODUCT_NAME');
          },
          onBlur: _this6.saveMenu,
          variant: "outlined",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          align: "left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 581
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39___default.a, {
          required: true,
          value: n.PRODUCT_DESCRIPTION,
          id: n.id,
          className: classes.textField,
          margin: "normal",
          onChange: function onChange(e) {
            _this6.handleEdit(e, n.id, 'PRODUCT_DESCRIPTION');
          },
          variant: "outlined",
          onBlur: _this6.saveMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          align: "left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39___default.a, {
          required: true,
          value: n.PRODUCT_PRICE,
          id: n.id,
          margin: "normal",
          onChange: function onChange(e) {
            _this6.handleEdit(e, n.id, 'PRODUCT_PRICE');
          },
          variant: "outlined",
          onBlur: _this6.saveMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          align: "left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 609
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_39___default.a, {
          required: true,
          select: true,
          value: n.PRODUCT_MENU_TYPE,
          margin: "normal",
          onChange: function onChange(e) {
            _this6.handleEdit(e, n.id, 'PRODUCT_MENU_TYPE');
          },
          variant: "outlined",
          onBlur: _this6.saveMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 610
          },
          __self: this
        }, foodTypes.map(function (option) {
          if (option.value != '') {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_40___default.a, {
              key: option.value,
              value: option.value,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 624
              },
              __self: this
            }, option.label);
          }
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
          align: "left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 632
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Chips__WEBPACK_IMPORTED_MODULE_44__["default"], {
          chipData: [{
            key: 0,
            label: 'Nuts'
          }, {
            key: 1,
            label: 'Gluten'
          }, {
            key: 2,
            label: 'Wheat'
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        })));
      }), emptyRows > 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_30___default.a, {
        style: {
          height: 49 * emptyRows
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27___default.a, {
        colSpan: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_29___default.a, {
        rowsPerPageOptions: [5],
        component: "div",
        count: data.length,
        rowsPerPage: rowsPerPage,
        page: page,
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_CustomizedNotification__WEBPACK_IMPORTED_MODULE_43__["default"], {
        innerRef: this.notificationRef,
        variant: this.state.status.type,
        message: this.state.status.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }));
    }
  }]);

  return ViewMenu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ViewMenu.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles)(ViewMenu));

/***/ }),

/***/ "./src/screens/ViewOrders.js":
/*!***********************************!*\
  !*** ./src/screens/ViewOrders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_OrderCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/OrderCard */ "./src/components/OrderCard.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar/Toolbar */ "./node_modules/@material-ui/core/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/SvgIcon/SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js");
/* harmony import */ var _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "/Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/screens/ViewOrders.js";












var styles = function styles(theme) {
  return {
    root: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start !important',
      alignItems: 'flex-start !important'
    },
    input: {
      margin: theme.spacing.unit,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    },
    button: {
      margin: 'auto',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 10
    },
    registerLink: {
      fontSize: 14,
      marginTop: 'auto'
    }
  };
};

var ViewOrders =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewOrders, _Component);

  function ViewOrders(props) {
    var _this;

    Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewOrders);

    _this = Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ViewOrders).call(this, props));

    _this.onOrderConfirm = function () {};

    _this.state = {
      orders: {}
    };
    _this.socket = null;
    return _this;
  }

  Object(_Users_Czyzuniu_Projects_FinalYear_foodOrdering_react_front_backend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewOrders, [{
    key: "playOrderSound",
    value: function playOrderSound() {
      this.audio = new Audio('../../img/newOrderNotification.mp3');
      this.audio.play();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _components_Utils__WEBPACK_IMPORTED_MODULE_12__["default"].getData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_12__["default"].endPoint, "/orders?id=").concat(this.props.history.location.state.restaurantId)).then(function (data) {
        _this2.setState({
          orders: data
        });

        _this2.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_13___default()('http://localhost:3001');

        _this2.socket.on('newOrder', function () {
          _components_Utils__WEBPACK_IMPORTED_MODULE_12__["default"].getData("".concat(_components_Utils__WEBPACK_IMPORTED_MODULE_12__["default"].endPoint, "/orders?id=").concat(_this2.props.history.location.state.restaurantId)).then(function (data) {
            _this2.setState({
              orders: data
            });

            _this2.playOrderSound();
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var renderOrders = Object.keys(this.state.orders).map(function (ord) {
        var order = _this3.state.orders[ord];
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_OrderCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          order: order.order,
          onOrderConfirm: function onOrderConfirm(order) {
            return _this3.onOrderConfirm();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        });
      });
      var renderNoOrders = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_14___default.a, {
        elevation: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "title",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "No orders yet : ("));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "content",
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, renderOrders);
    }
  }]);

  return ViewOrders;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ViewOrders.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(ViewOrders));

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.'); // Execute callback

            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Czyzuniu/Projects/FinalYear/foodOrdering-react-front-backend/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map