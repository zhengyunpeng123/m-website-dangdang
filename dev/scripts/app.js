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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var indexTpl = __webpack_require__(/*! ./views/index.html */ \"./src/views/index.html\");\n\nvar renderedIndexTpl = template.render(indexTpl, {});\ndocument.querySelector('#app').innerHTML = renderedIndexTpl;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/views/index.html":
/*!******************************!*\
  !*** ./src/views/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">    <main>        <header class=\\\"search_header\\\">            <div class=\\\"logo\\\">                <a class=\\\"iconfont yo-ico\\\" href=\\\"###\\\">&#xe694;</a>            </div>            <div class=\\\"search_box\\\">                <div class=\\\"search\\\">                    <div class=\\\"text_box\\\">                        <i class=\\\"yo-ico\\\">&#xe60a;</i>                        <input id=\\\"keyword\\\" type=\\\"text\\\" placeholder=\\\"巴拉巴拉，千款4件3折\\\" class=\\\"keyword text \\\">                    </div>                </div>            </div>            <div class=\\\"header_category\\\">                <a class=\\\"yo-ico\\\" href=\\\"###\\\">&#xe634;</a>            </div>        </header>        <section class=\\\"swiper_box\\\">            <div class=\\\"swiper_container\\\">                <div class=\\\"swiper_wrapper\\\">                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img58.ddimg.cn/86030056505068_y.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img61.ddimg.cn/upload_img/00764/111/1242x366-1559537992.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img61.ddimg.cn/ddreader/dangebook/zsjyj1242x366.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img63.ddimg.cn/upload_img/00626/sxt01/1242-366-21621-1559550906.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img63.ddimg.cn/upload_img/00702/B/1242x366_wzh_20190530-1559541406.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img63.ddimg.cn/upload_img/00601/111/12423366410748-1559554711.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img59.ddimg.cn/116550069612349_y.jpg\\\" alt=\\\"\\\"></a></div>                    <div class=\\\"swiper_slide\\\"><a href=\\\"###\\\"><img src=\\\"http://img62.ddimg.cn/upload_img/00785/ts0604_0610/1242x366-1559530569.jpg\\\" alt=\\\"\\\"></a></div>                </div>            </div>        </section>    </main>    <nav class=\\\"footer_nav clearfix\\\">        <ul>            <li>                <a class=\\\"on\\\" href=\\\"\\\">                    <i class=\\\"yo-ico\\\">&#xe6bb;</i>                    <b>首页</b>                </a>            </li>            <li>                <a href=\\\"\\\">                    <i class=\\\"yo-ico\\\">&#xe634;</i>                    <b>分类</b>                </a>            </li>            <li>                <a href=\\\"\\\">                    <i class=\\\"yo-ico\\\">&#xe6cd;</i>                    <b>值得买</b>                </a>            </li>            <li>                <a href=\\\"\\\">                    <i class=\\\"yo-ico\\\">&#xe6af;</i>                    <b>购物车</b>                </a>            </li>            <li>                <a href=\\\"\\\">                    <i class=\\\"yo-ico\\\">&#xe736;</i>                    <b>我的当当</b>                </a>            </li>        </ul>    </nav>    <footer></footer></div>\"\n\n//# sourceURL=webpack:///./src/views/index.html?");

/***/ })

/******/ });