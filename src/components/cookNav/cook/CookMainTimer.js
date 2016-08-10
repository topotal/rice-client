import TiView from '../../../tiWrapp/TiView';
import TiLabel from '../../../tiWrapp/TiLabel';
import moment from 'moment';
import DeviceInfo from '../../../enum/DeviceInfo';
import DesignParam from '../../../enum/DesignParam';
import ColorButton from '../../common/ColorButton';

/**
 * タイマーのメイン部分
 */
export default class CookMainTimer extends TiView {

  /** 高さ */
  static get HEIGHT() { return 88; }

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

    // タイマーアイコン
    let icon = this._createTimerIcon();
    icon.setTop(14);
    icon.setLeft(textLeft);
    this.add(icon);

    // タイマーの数字
    this._timerText = this._createMainText();
    this._timerText.setTop(10);
    this._timerText.setLeft(textLeft + 32);
    this.add(this._timerText);

    // ボタンのラッパー
    let buttonsWrap = new TiView({
      width: 256,
      height: 32,
      bottom: 10
    });
    this.add(buttonsWrap);

    // 停止ボタン
    this._stopButton = new ColorButton(DesignParam.COLOR.DEEP_BLUE, '停止');
    this._stopButton.setWidth(123);
    this._stopButton.setHeight(32);
    this._stopButton.setLeft(0);
    this._onClickStop = this._onClickStop.bind(this);
    this._stopButton.addEventListener('wClick', this._onClickStop);
    buttonsWrap.add(this._stopButton);

    // 完成ボタン
    this._compButton = new ColorButton(DesignParam.COLOR.GREEN, '完成');
    this._compButton.setWidth(123);
    this._compButton.setHeight(32);
    this._compButton.setRight(0);
    this._onClickComp = this._onClickComp.bind(this);
    this._compButton.addEventListener('wClick', this._onClickComp);
    buttonsWrap.add(this._compButton);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(CookMainTimer.HEIGHT);
    this.setBackgroundColor(DesignParam.COLOR.BLACK);
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
      color: DesignParam.COLOR.LIGHT_YELLOW,
      font: {
        fontSize: 24
      }
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
   * タイマーを一時停止させます。
   */
  stop() {
    this.isActive = false;
    clearInterval(this._timer);
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

  /**
   * 停止ボタン押下時のハンドラーです。
   */
  _onClickStop() {
    // 停止ボタンクリックイベントを発火
    this.fireEvent('clickStop');
  }

  /**
   * 再開ボタン押下時のハンドラーです。
   */
  _onClickResume() {
    // 再開ボタンクリックイベント発火
    this.fireEvent('clickResume');
  }

  /**
   * 完成ボタン押下時のハンドラーです。
   */
  _onClickComp() {
    // 完成ボタンクリックイベント発火
    this.fireEvent('clickComp');
  }

}
