/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(7);

var _Html2 = _interopRequireDefault(_Html);

var _styledComponents = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <-- importing ServerStyleSheet

var port = 9000;
var server = (0, _express2.default)();

server.get('/', function (req, res) {
  var sheet = new _styledComponents.ServerStyleSheet(); // <-- creating out stylesheet

  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_App2.default, null))); // <-- collecting styles
  var styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  var title = 'Server side Rendering with Styled Components';

  res.send((0, _Html2.default)({
    body: body,
    styles: styles, // <-- passing the styles to our Html template
    title: title
  }));
});

server.listen(port);
console.log('Serving at http://localhost:' + port);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(6);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = _styles2.default.component;

var App = function App() {
  return _react2.default.createElement(
    AppContainer,
    null,
    'Brett Cunningham II'
  );
};

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['    {\n    font-family: \'Open Sans\', sans-serif;\n}\n\n#Neighborhood {\n    margin: auto;\n}\n\np {\n    font-size: 15px;\n}\n\na:link {\n    text-decoration: none;\n}\n\na:visited {\n    text-decoration: none;\n    color: blue;\n}\n\na:hover {\n    color: lightblue\n}\n\nbutton:focus {\n    outline: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n\n/* app title header */\n\n#pageTitle {\n    clear: both;\n    display: block;\n    font-weight: 500;\n\n    padding-bottom: 10px;\n    border-bottom-color: lightgrey;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    \n    padding-top: 10px;\n    border-top-color: lightgrey;\n    border-top-style: solid;\n    border-top-width: 1px;\n    margin-bottom: 20px;\n\n}\n\n\n/* Median Zestimate */\n\n#medianZestimateAndMarketTempContainer {\n    width: 100%;\n}\n\n#medianZestimateSection {\n    float: left;\n    width: 45%;\n}\n\n#medianZestimateHeader {\n    display: inline-block;\n    margin-bottom: 10px;\n}\n\n#averagePrice {\n    margin-bottom: 0px;\n}\n\n#zestimateArrow {\n    padding-top: 10px;\n}\n\n#twelveMonthChange {\n    display: inline-block;\n    font-size: 20px;\n    font-weight: normal;\n    padding-left: 5px;\n    padding-bottom: 5px;\n    margin: 5px;\n}\n\n.past12MonthsText {\n    font-size: 12px;\n}\n\n\n\n/* Market Temp */\n\n#marketTempSection {\n    float: right;\n    width: 45%;\n    \n}\n\n#marketTempHeader {\n    display: inline-block;\n    margin-bottom: 10px;\n}\n\n.questionMarkButton {\n    display: inline-block;\n    border-radius: 50%;\n    background-color: rgb(187, 185, 185);\n    color: white;\n    border: none;\n    height: 18px;\n    width: 18px;\n    font-size: 10px;\n    text-align: center;\n}\n\n.dialogueContainer {\n    display: inline-block;\n    position: relative;\n    z-index: 3;\n}\n\n.ui-dialog-container {\n    position: absolute;\n}\n\n.ui-dialog {\n    position: absolute;\n    top: 100px;\n    left: 275px;\n    background-color: rgb(46, 44, 44);\n    color: white;\n    font-size: 11px;\n    line-height: 0.5;\n    border-radius: 5px;\n    width: 270px;\n    opacity: .95;\n}\n\n.button {\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n.dialogueMessageLine {\n    padding-left: 5px;\n    font-size: 12px;\n}\n\n.dialogueLink {\n    font-size: 12px;\n    padding-left: 5px;\n}\n\n.questionMarkButton:hover {\n    background-color: black;\n}\n\n#temperatureBarContainer {\n    position: relative;\n}\n\n#temperatureBar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 15px;\n    background-color: lightgrey;\n    border-radius: 15px;\n}\n\n#temperature {\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 15px;\nbackground-image: linear-gradient(to right, blue, red);\nclip-path: inset(0% 10% 0% 0%);\nborder-radius: 15px;\n}\n\n#buyersMarketText {\n    padding-top: 20px;\n    font-size: 12px;\n    float: left;\n}\n\n#sellersMarketText {\n    padding-top: 20px;\n    font-size: 12px;\n    float: right;\n}\n\n\n\n\n/* Neighborhood Description */\n\n#neighborhoodInfoDescription {\n    clear: both;\n    padding-top: 20px;\n    padding-bottom: 75px;\n    \n}\n\n#walkerScore {\n    float: left;\n    font-size: 13px;\n}\n\n#transitScore {\n    float: right;\n    font-size: 13px;\n}\n\n.scoreIcons {\n    width: 13px;\n    height: 13px;\n    padding-right: 5px;\n}\n\n#scoreNumbers {\n    font-weight: bold;\n}\n\n.scoreButtons {\n    background-color: white;\n    border: none;\n    color: blue;\n    font-size: 13px;\n\n}\n\n\n\n\n\n\n\n/* Map */\n\n.propertyMarkerContainer {\n    position: relative;\n}\n\n.propertyMarkerPrice {\n    background-color: rgb(248, 248, 248);\n    color: black;\n    border-radius: 4px;\n    \n}\n\n.propertyMarkerPrice:hover {\n    background-color: white;\n    color: black;\n}\n\n.circle {\n    height: 10px;\n    width: 10px;\n    background-color: rgb(243, 40, 18);\n    border-radius: 50%;\n    position: absolute;\n    left: 20px;\n    bottom: 15px;\n    border-color: green;\n    border-width: 10px;\n    \n    \n}\n\n.currentPropMapMarkerImg {\n    height: 50px;\n    width: 50px;\n    border-width: 4px;\n    border-color: white;\n    \n}\n\n\n\n\n/* Nearby Homes */\n\n#nearbyHomesSectionContainer {\n    padding-bottom: 30px;\n    border-bottom-color: lightgrey;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n}\n\n#nearbyHomesCarrouselContainer {\n    height:100%;\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.nearbyHomesPicsScroll {\n    width: 20px;\n    font-size: 15px;\n    background-color: white;\n    border: none;\n}\n\n.nearbyHomesPicContainer {\n    position: relative;\n    height: 150px;\n    width: 43%;\n\n}\n\n.nearbyHomesPic {\n    display: absolute;\n    height: 150px;\n    width: 100%;\n    border: 2px solid white;\n}\n\n.nearbyHomesPicTextOverlayPhotos {\n    position: absolute;\n    left: 2%;\n    top: 2%;\n    color: white;\n    font-size: 12px;\n}\n\n.nearbyHomesPicTextOverlayOnOffMarket {\n    position: absolute;\n    left: 2%;\n    top: 52%;\n    color: white;\n}\n\n.nearbyHomesPicTextOverlayPrice {\n    position: absolute;\n    left: 2%;\n    top: 65%;\n    font-size: 25px;\n    color: white;\n}\n\n.nearbyHomesPicTextOverlayBeds {\n    position: absolute;\n    left: 40%;\n    top: 70%;\n    color: white;\n    font-size: 13px;\n}\n\n.nearbyHomesPicTextOverlayAddress {\n    position: absolute;\n    left: 2%;\n    top: 88%;\n    color: white;\n    font-size: 13px;\n    color: rgb(240, 240, 240);\n}\n'], ['    {\n    font-family: \'Open Sans\', sans-serif;\n}\n\n#Neighborhood {\n    margin: auto;\n}\n\np {\n    font-size: 15px;\n}\n\na:link {\n    text-decoration: none;\n}\n\na:visited {\n    text-decoration: none;\n    color: blue;\n}\n\na:hover {\n    color: lightblue\n}\n\nbutton:focus {\n    outline: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n\n/* app title header */\n\n#pageTitle {\n    clear: both;\n    display: block;\n    font-weight: 500;\n\n    padding-bottom: 10px;\n    border-bottom-color: lightgrey;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    \n    padding-top: 10px;\n    border-top-color: lightgrey;\n    border-top-style: solid;\n    border-top-width: 1px;\n    margin-bottom: 20px;\n\n}\n\n\n/* Median Zestimate */\n\n#medianZestimateAndMarketTempContainer {\n    width: 100%;\n}\n\n#medianZestimateSection {\n    float: left;\n    width: 45%;\n}\n\n#medianZestimateHeader {\n    display: inline-block;\n    margin-bottom: 10px;\n}\n\n#averagePrice {\n    margin-bottom: 0px;\n}\n\n#zestimateArrow {\n    padding-top: 10px;\n}\n\n#twelveMonthChange {\n    display: inline-block;\n    font-size: 20px;\n    font-weight: normal;\n    padding-left: 5px;\n    padding-bottom: 5px;\n    margin: 5px;\n}\n\n.past12MonthsText {\n    font-size: 12px;\n}\n\n\n\n/* Market Temp */\n\n#marketTempSection {\n    float: right;\n    width: 45%;\n    \n}\n\n#marketTempHeader {\n    display: inline-block;\n    margin-bottom: 10px;\n}\n\n.questionMarkButton {\n    display: inline-block;\n    border-radius: 50%;\n    background-color: rgb(187, 185, 185);\n    color: white;\n    border: none;\n    height: 18px;\n    width: 18px;\n    font-size: 10px;\n    text-align: center;\n}\n\n.dialogueContainer {\n    display: inline-block;\n    position: relative;\n    z-index: 3;\n}\n\n.ui-dialog-container {\n    position: absolute;\n}\n\n.ui-dialog {\n    position: absolute;\n    top: 100px;\n    left: 275px;\n    background-color: rgb(46, 44, 44);\n    color: white;\n    font-size: 11px;\n    line-height: 0.5;\n    border-radius: 5px;\n    width: 270px;\n    opacity: .95;\n}\n\n.button {\n    background-color: transparent;\n    color: white;\n    border: none;\n}\n\n.dialogueMessageLine {\n    padding-left: 5px;\n    font-size: 12px;\n}\n\n.dialogueLink {\n    font-size: 12px;\n    padding-left: 5px;\n}\n\n.questionMarkButton:hover {\n    background-color: black;\n}\n\n#temperatureBarContainer {\n    position: relative;\n}\n\n#temperatureBar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 15px;\n    background-color: lightgrey;\n    border-radius: 15px;\n}\n\n#temperature {\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 15px;\nbackground-image: linear-gradient(to right, blue, red);\nclip-path: inset(0% 10% 0% 0%);\nborder-radius: 15px;\n}\n\n#buyersMarketText {\n    padding-top: 20px;\n    font-size: 12px;\n    float: left;\n}\n\n#sellersMarketText {\n    padding-top: 20px;\n    font-size: 12px;\n    float: right;\n}\n\n\n\n\n/* Neighborhood Description */\n\n#neighborhoodInfoDescription {\n    clear: both;\n    padding-top: 20px;\n    padding-bottom: 75px;\n    \n}\n\n#walkerScore {\n    float: left;\n    font-size: 13px;\n}\n\n#transitScore {\n    float: right;\n    font-size: 13px;\n}\n\n.scoreIcons {\n    width: 13px;\n    height: 13px;\n    padding-right: 5px;\n}\n\n#scoreNumbers {\n    font-weight: bold;\n}\n\n.scoreButtons {\n    background-color: white;\n    border: none;\n    color: blue;\n    font-size: 13px;\n\n}\n\n\n\n\n\n\n\n/* Map */\n\n.propertyMarkerContainer {\n    position: relative;\n}\n\n.propertyMarkerPrice {\n    background-color: rgb(248, 248, 248);\n    color: black;\n    border-radius: 4px;\n    \n}\n\n.propertyMarkerPrice:hover {\n    background-color: white;\n    color: black;\n}\n\n.circle {\n    height: 10px;\n    width: 10px;\n    background-color: rgb(243, 40, 18);\n    border-radius: 50%;\n    position: absolute;\n    left: 20px;\n    bottom: 15px;\n    border-color: green;\n    border-width: 10px;\n    \n    \n}\n\n.currentPropMapMarkerImg {\n    height: 50px;\n    width: 50px;\n    border-width: 4px;\n    border-color: white;\n    \n}\n\n\n\n\n/* Nearby Homes */\n\n#nearbyHomesSectionContainer {\n    padding-bottom: 30px;\n    border-bottom-color: lightgrey;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n}\n\n#nearbyHomesCarrouselContainer {\n    height:100%;\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.nearbyHomesPicsScroll {\n    width: 20px;\n    font-size: 15px;\n    background-color: white;\n    border: none;\n}\n\n.nearbyHomesPicContainer {\n    position: relative;\n    height: 150px;\n    width: 43%;\n\n}\n\n.nearbyHomesPic {\n    display: absolute;\n    height: 150px;\n    width: 100%;\n    border: 2px solid white;\n}\n\n.nearbyHomesPicTextOverlayPhotos {\n    position: absolute;\n    left: 2%;\n    top: 2%;\n    color: white;\n    font-size: 12px;\n}\n\n.nearbyHomesPicTextOverlayOnOffMarket {\n    position: absolute;\n    left: 2%;\n    top: 52%;\n    color: white;\n}\n\n.nearbyHomesPicTextOverlayPrice {\n    position: absolute;\n    left: 2%;\n    top: 65%;\n    font-size: 25px;\n    color: white;\n}\n\n.nearbyHomesPicTextOverlayBeds {\n    position: absolute;\n    left: 40%;\n    top: 70%;\n    color: white;\n    font-size: 13px;\n}\n\n.nearbyHomesPicTextOverlayAddress {\n    position: absolute;\n    left: 2%;\n    top: 88%;\n    color: white;\n    font-size: 13px;\n    color: rgb(240, 240, 240);\n}\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports.component = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */

var Html = function Html(_ref) {
  var body = _ref.body,
      styles = _ref.styles,
      title = _ref.title;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      " + styles + "\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"app\">" + body + "</div>\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ })
/******/ ]);