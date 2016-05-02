import TiView from '../../../tiWrapp/TiView';
import DeviceInfo from '../../../enum/DeviceInfo';

/**
 * 炊飯タイムラインクラスです。
 */
export default class Timeline extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    // メインタイマー
    this._mainTimer = this._createMainTimer();
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
   * メインタイマーを生成します。
   */
  _createMainTimer() {
    var view = new TiView({
      width: Ti.UI.FILL,
      height: 60,
      backgroundColor: '#FF0000'
    });
    return view;
  }

}
