import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import moment from 'moment';
import DeviceInfo from '../../../enum/DeviceInfo';
import DesignParam from '../../../enum/DesignParam';

/**
 * タイマーのメイン部分
 */
export default class CookMainTimer extends TiView {

  /** 高さ */
  static get HEIGHT() { return 60; }

  /**
   * 経過秒数を返却します。
   * @return number
   */
  get seconds() {
    return this._secounds;
  }

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    this._timerId = null;
    this._secounds = 0;
    this.isActive = false;

    // 見栄え処理
    this._initDecoration();

    let textWidth = 140;
    let textLeft = (DeviceInfo.WIDTH - textWidth) / 2;

    // 上ボーダー
    let topBorder = this._createBorder();
    topBorder.setTop(0);
    this.add(topBorder);

    // タイマーアイコン
    let icon = this._createTimerIcon();
    icon.setLeft(textLeft);
    this.add(icon);

    // タイマーの数字
    this._timerText = this._createMainText();
    this._timerText.setLeft(textLeft + 32);
    this.add(this._timerText);

    // 下ボーダー
    let bottomBorder = this._createBorder();
    bottomBorder.setBottom(0);
    this.add(bottomBorder);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(CookMainTimer.HEIGHT);
    this.setBackgroundColor(DesignParam.COLOR.WHITE);
  }

  /**
   * 時計アイコンを生成します。
   * @return TiView
   */
  _createTimerIcon() {
    return new TiView({
      width: 22,
      height: 22,
      backgroundImage: DesignParam.IMAGE.TIMER
    });
  }

  /**
   * メインテキストを作成します。
   * @return TiLabel
   */
  _createMainText() {
    return new TiLabel({
      text: '00:00:00',
      textAlign: 'left',
      color: DesignParam.COLOR.BLACK,
      font: {
        fontSize: 24
      }
    });
  }

  /**
   * ボーダーを作成します。
   * @return TiView
   */
  _createBorder() {
    return new TiView({
      width: Ti.UI.FILL,
      height: 1,
      backgroundColor: DesignParam.COLOR.GRAY
    });
  }

  /**
   * タイマーをスタートさせます。
   */
  start() {
    this.isActive = true;
    this._timer = setInterval(() => this._increment(), 1000);
  }

  /**
   * タイマーをリセットします。
   */
  reset() {
    this.isActive = false;
    this._secounds = 0;
    clearInterval(this._timer);
  }

  /**
   * タイマーのカウントを進めます。
   */
  _increment() {
    this._secounds+=1;
    let zeroMoment = moment('00:00:00', 'HH:mm:ss');
    let nowMoment = zeroMoment.seconds(this._secounds);
    this._timerText.setText(nowMoment.format('HH:mm:ss'));
  }

}
