'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MainNav = require('./components/mainNav/MainNav');

var _MainNav2 = _interopRequireDefault(_MainNav);

var _CookNav = require('./components/cookNav/CookNav');

var _CookNav2 = _interopRequireDefault(_CookNav);

var _BaseService = require('./service/BaseService');

var _BaseService2 = _interopRequireDefault(_BaseService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * メインアプリクラス
 */

var App = function () {

  /**
   * コンストラクター
   */

  function App() {
    _classCallCheck(this, App);

    this.mainNav = new _MainNav2.default();
    this.cookNav = new _CookNav2.default();

    new _BaseService2.default();
  }

  /**
   * アプリをスタート
   */


  _createClass(App, [{
    key: 'start',
    value: function start() {
      this.mainNav.open();
    }
  }]);

  return App;
}();

var app = new App();
app.start();