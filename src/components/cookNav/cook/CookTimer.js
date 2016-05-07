import TiView from '../../../tiWrapp/TiView';
import DeviceInfo from '../../../enum/DeviceInfo';
import CookTimerMain from './CookTimerMain';

/**
 * 炊飯タイムラインクラスです。
 */
export default class CookTimer extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._timerId = null;
    this._count = 0;

    // 見栄え処理
    this._initDecoration();

    // メインタイマー
    this._mainTimer = new CookTimerMain();
    this._mainTimer.setBottom(0);
    this.add(this._mainTimer);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    var controllerHeight = 220;
    var height =
      DeviceInfo.getHeight() - controllerHeight - DeviceInfo.getHeaderHeight();
    this.setHeight(height);
    this.setBackgroundColor('#00FFFF');
  }

  /**
   * タイマーをスタートさせます。
   */
  start() {
    this._timer = setInterval(() => this._increment(), 1000);
  }

  /**
   * タイマーをリセットします。
   */
  reset() {
    count = 0;
    clearInterval(this._timer);
  }

  /**
   * タイマーのカウントを進めます。
   */
  _increment() {
    this._count+=1000;
    this._mainTimer.setMilliseconds(this._count);
  }

}
