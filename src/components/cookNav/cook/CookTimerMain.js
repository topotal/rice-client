import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import moment from 'libs/moment';
import DeviceInfo from '../../../enum/DeviceInfo';
import DesignParam from '../../../enum/DesignPram';

/**
 * タイマーのメイン部分
 */
export default class CookTimerMain extends TiView {

  /**
   * コンストラクター
   * @constructor
   */
  constructor() {
    super();

    // 見栄え処理
    this._initDecoration();

    let textWidth = 140;
    let textLeft = (DeviceInfo.getWidth() - textWidth) / 2;

    // 上ボーダー
    let topBorder = this._createBorder();
    topBorder.setTop(0);
    this.add(topBorder);

    // タイマーアイコン
    let icon = this._createTimerIcon();
    icon.setLeft(textLeft);
    this.add(icon);

    // タイマーの数字
    this._mainTimerText = this._createMainText();
    this._mainTimerText.setLeft(textLeft + 32);
    this.add(this._mainTimerText);

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
    this.setHeight(60);
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
   * ミリ秒でカウントをセットします。
   * @param milliseconds
   */
  setMilliseconds(milliseconds) {
     let zeroMoment = moment('00:00:00', 'HH:mm:ss');
     let nowMoment = zeroMoment.milliseconds(milliseconds);
     this._mainTimerText.setText(nowMoment.format('HH:mm:ss'));
  }
}
