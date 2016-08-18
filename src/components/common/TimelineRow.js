import TiTableViewRow from '../../tiWrapp/TiTableViewRow';
import TiView from '../../tiWrapp/TiView';
import TiLabel from '../../tiWrapp/TiLabel';
import DesignParam from '../../enum/DesignParam';
import ModeMark from '../common/ModeMark';
import moment from 'moment';
import CookStep from '../../models/vo/CookStep';

/**
 * 炊飯記録のRowクラスです。
 */
export default class TimelineRow extends TiTableViewRow {

  get CURRENT_RIGHT_S() {
    return 72;
  }
  get CURRENT_RIGHT_M() {
    return 102;
  }
  get CURRENT_RIGHT_L() {
    return 134;
  }

  get data() {
    return new CookStep(this._mode, this._seconds);
  }

  /**
   * コンストラクター
   * @constructor
   * @param mode
   */
  constructor(data) {
    super();

    this._mode = data.mode;
    this._seconds = data.seconds;

    this._timer = null;

    // 見栄え処理
    this._initDecoration();

    // 前との繋ぎ棒
    this._beforeBar = this._createBar();
    this._beforeBar.setTop(0);
    this._beforeBar.setLeft(54);
    this._beforeBar.setVisible(false);
    this.add(this._beforeBar);

    // 次との繋ぎ棒
    this._nextBar = this._createBar();
    this._nextBar.setBottom(0);
    this._nextBar.setLeft(54);
    this._nextBar.setVisible(false);
    this.add(this._nextBar);

    // モードマーク
    this._modeMark = new ModeMark(this._mode);
    this._modeMark.setLeft(36);
    this.add(this._modeMark);

    // カレントマーク
    this._currentMark = this._createCurrentMark();
    this._currentMark.setRight(this.CURRENT_RIGHT_S);
    this._currentMark.setVisible(false);
    this.add(this._currentMark);

    // セパレーター
    this._separator = this._createSeparator();
    this._separator.setBottom(0);
    this._separator.setVisible(false);
    this.add(this._separator);

    // 秒数
    this._time = this._createTime();
    this._time.setRight(20);
    this.add(this._time);
  }

  /**
   * 装飾の初期化
   */
  _initDecoration() {
    this.setWidth(Ti.UI.FILL);
    this.setHeight(60);
    this.setSelectionStyle(Ti.UI.iPhone.TableViewCellSelectionStyle.NONE);
  }

  /**
   * 秒数
   * @return TiLabel
   */
  _createTime() {
    return new TiLabel({
      text: this._createTimerText(this._seconds),
      textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
      color: DesignParam.COLOR.BLACK,
      font: {
        fontSize: 14
      }
    });
  }

  /**
   * カレントマーク
   * @return TiView
   */
  _createCurrentMark() {
    return new TiView({
      width: 10,
      height: 10,
      backgroundColor: DesignParam.COLOR.GREEN,
      borderRadius: 5
    });
  }

  /**
   * 繋ぎ棒を生成します。
   * @return TiView
   */
  _createBar() {
    return new TiView({
      width: 4,
      height: 30,
      backgroundColor: DesignParam.COLOR.GRAY
    });
  }

  /**
   * セパレーターを生成します。
   */
  _createSeparator() {
    return new TiView({
      left: 112,
      right: 0,
      height: 1,
      backgroundColor: DesignParam.COLOR.GRAY
    });
  }

  /**
   * タイマーをスタートさせます。
   */
  start() {
    this._currentMark.setVisible(true);
    this._time.setFont({
      fontWeight: 'bold'
    });
    this._timer = setInterval(() => this._increment(), 1000);
  }

  /**
   * タイマーをストップします。
   */
  stop() {
    this._currentMark.setVisible(false);
    this._time.setFont({
      fontWeight: 'normal'
    });
    clearInterval(this._timer);
  }

  /**
   * 前のRowと繋ぎます。
   */
  jointBeforeRow() {
    this._beforeBar.setVisible(true);
  }

  /**
   * 次のRowと繋ぎます。
   */
  jointNextRow() {
    this._nextBar.setVisible(true);
    this._separator.setVisible(true);
  }

  /**
   * タイマーのカウントを進めます。
   */
  _increment() {
    this._seconds+=1;
    let text = this._createTimerText(this._seconds);
    this._time.setText(text);
  }

  /**
   * タイマーのカウントテキストを生成します。
   * @param seconds
   */
  _createTimerText(seconds) {
    let zeroMoment = moment('00:00:00', 'HH:mm:ss');
    let nowMoment = zeroMoment.seconds(seconds);
    let second = nowMoment.second();
    let minute = nowMoment.minute();
    let hour = nowMoment.hour();
    let text = '';

    if(hour) {
      text = hour + '時間 ' + minute + '分 ' + second + '秒 ';
      this._currentMark.setRight(this.CURRENT_RIGHT_L);
    } else if(minute) {
      text = minute + '分 ' + second + '秒 ';
      this._currentMark.setRight(this.CURRENT_RIGHT_M);
    } else {
      text = second + '秒 ';
      this._currentMark.setRight(this.CURRENT_RIGHT_S);
    }

    return text;
  }
}
