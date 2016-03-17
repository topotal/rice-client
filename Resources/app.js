'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TiWindow = require('./tiWrapp/TiWindow');

var _TiWindow2 = _interopRequireDefault(_TiWindow);

var _Hoge = require('./Hoge');

var _Hoge2 = _interopRequireDefault(_Hoge);

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

    console.log('const');
  }

  /**
   * アプリをスタート
   */


  _createClass(App, [{
    key: 'start',
    value: function start() {
      console.log('start');
      var window = new _TiWindow2.default({
        backgroundColor: '#FF0000'
      });
    }
  }]);

  return App;
}();

var app = new App();
app.start();