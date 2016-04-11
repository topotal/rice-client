'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MainNav = require('./components/mainNav/MainNav');

var _MainNav2 = _interopRequireDefault(_MainNav);

var _CookNav = require('./components/cookNav/CookNav');

var _CookNav2 = _interopRequireDefault(_CookNav);

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

    // navWinのリスト
    this._navWinList = [];
    // 初期navWindowの準備
    this._init();
  }

  /**
   * 初期化
   */


  _createClass(App, [{
    key: '_init',
    value: function _init() {
      this._navWinList.push({
        name: 'main',
        navWin: new _MainNav2.default()
      });
      this._navWinList.push({
        name: 'cook',
        navWin: new _CookNav2.default()
      });
    }

    /**
     * 指定したnavWindowを返却します。
     * @param name
     */

  }, {
    key: 'getNavWin',
    value: function getNavWin(name) {
      var navWin = null;
      var length = this._navWinList.length;
      for (var i = 0; i < length; i++) {
        if (this._navWinList[i].name == name) {
          navWin = this._navWinList[i].navWin;
        }
      }
      return navWin;
    }

    /**
     * 指定したnavWindowを開きます。
     * @param name
     */

  }, {
    key: 'openNavWin',
    value: function openNavWin(name) {
      console.info('~~~~~~~~~~~~~~', name);
      var navWin = this.getNavWin(name);
      console.info(navWin);
      navWin.open();
    }

    /**
     * 指定したnavWindowを閉じます。
     */

  }, {
    key: 'closeNavWin',
    value: function closeNavWin() {}

    /**
     * 現在開いているnavWindowを返却します。
     */

  }, {
    key: 'getCurrentNavWin',
    value: function getCurrentNavWin() {
      return;
    }
  }]);

  return App;
}();

var app = new App();
app.openNavWin('main');