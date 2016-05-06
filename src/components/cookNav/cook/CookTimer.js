import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import DeviceInfo from '../../../enum/DeviceInfo';
import DesignParam from '../../../enum/DesignPram';
import moment from 'libs/moment';

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
      backgroundColor: DesignParam.COLOR.WHITE
    });

    // 上ボーダー
    var topBorder = new TiView({
      top: 0,
      width: Ti.UI.FILL,
      height: 1,
      backgroundColor: DesignParam.COLOR.GRAY
    });
    view.add(topBorder);

    // タイマーアイコン
    var icon = new TiView({
      left: ((DeviceInfo.getWidth() - 140) / 2),
      width: 22,
      height: 22,
      backgroundImage: DesignParam.IMAGE.TIMER
    });
    view.add(icon);

    // タイマーの数字
    this._mainTimerText = new TiLabel({
      left: ((DeviceInfo.getWidth() - 140) / 2) + 32,
      text: '00:00:00',
      textAlign: 'left',
      color: DesignParam.COLOR.BLACK,
      font: {
        fontSize: 24
      }
    });
    view.add(this._mainTimerText);

    // 下ボーダー
    var bottomBorder = new TiView({
      bottom: 0,
      width: Ti.UI.FILL,
      height: 1,
      backgroundColor: DesignParam.COLOR.GRAY
    });
    view.add(bottomBorder);

    return view;
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
    let time = moment('00:00:00', 'HH:mm:ss').milliseconds(this._count).format('HH:mm:ss');
    this._mainTimerText.setText(time);
  }

}
